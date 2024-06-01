import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  private featureFlags$ = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient,
    @Inject('featureFlagPath') private path: string
  ) {
    this.loadFeatureFlags();
  }

  private loadFeatureFlags(): void {
    this.httpClient
      .get(this.path)
      .subscribe((flags) => this.featureFlags$.next(flags));
  }

  isFeatureEnabled(featureName: string): Observable<boolean> {
    return this.featureFlags$.pipe(map((flags) => flags[featureName] === true));
  }
}
