import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public theme$ = new BehaviorSubject<string>('dark');

  public setTheme(key: string) {
    this.theme$.next(key);
  }
}
