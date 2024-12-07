import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { User } from '../models/user.model';
import { SocialAuthService } from '@abacritt/angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private SESSION_KEY = localStorage.getItem('SESSION_KEY') ?? '';
  private readonly EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;
  isLogged$ = new BehaviorSubject<boolean>(this.checkSession());

  constructor(private authService: SocialAuthService) {
    this.initializeSessionExpirationWatcher();
  }

  setSessionKey(key: string): void {
    this.SESSION_KEY = key;
    localStorage.setItem('SESSION_KEY', this.SESSION_KEY);
  }

  login(userData: User): void {
    const sessionData = {
      user: userData,
      timestamp: Date.now(),
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    this.isLogged$.next(true);
    this.initializeSessionExpirationWatcher();
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    this.isLogged$.next(false);
    this.authService.signOut();
  }

  private checkSession(): boolean {
    const session = this.getSession();
    if (!session) return false;
    return Date.now() - session.timestamp < this.EXPIRATION_TIME;
  }

  public getSession(): { user: User; timestamp: number } | null {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  private initializeSessionExpirationWatcher(): void {
    const session = this.getSession();
    if (!session) return;
    const timeLeft = this.EXPIRATION_TIME - (Date.now() - session.timestamp);
    if (timeLeft > 0) {
      timer(timeLeft).subscribe(() => {
        this.logout();
      });
    } else {
      this.logout();
    }
  }
}
