import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private SESSION_KEY = localStorage.getItem('SESSION_KEY') ?? '';
  private readonly EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000;
  private isLoggedSubject = new BehaviorSubject<boolean>(this.checkSession());

  isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();

  constructor() {
    this.initializeSessionExpirationWatcher();
  }

  setSessionKey(key: string): void {
    this.SESSION_KEY = key;
    localStorage.setItem('SESSION_KEY', this.SESSION_KEY);
  }

  login(userData: any): void {
    const sessionData = {
      user: userData,
      timestamp: Date.now(),
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    this.isLoggedSubject.next(true);
    this.initializeSessionExpirationWatcher();
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
    this.isLoggedSubject.next(false);
  }

  private checkSession(): boolean {
    const session = this.getSession();
    if (!session) return false;
    return Date.now() - session.timestamp < this.EXPIRATION_TIME;
  }

  private getSession(): { user: any; timestamp: number } | null {
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
