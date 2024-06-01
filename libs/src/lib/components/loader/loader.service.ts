import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private apiCount = 0;
  public isLoading$ = new BehaviorSubject<boolean>(false);

  showLoader() {
    if (this.apiCount === 0) {
      this.isLoading$.next(true);
    }
    this.apiCount++;
  }

  hideLoader() {
    this.apiCount--;
    if (this.apiCount === 0) {
      this.isLoading$.next(false);
    }
  }
}
