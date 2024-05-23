import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { LatestApp } from './models/latest-app.model';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../../../shared/models/base-response.model';

@Injectable({ providedIn: 'root' })
export class QuickBarService {
  constructor(private http: HttpClient) {}

  getLatestApps$(): Observable<BaseResponse<LatestApp[]>> {
    return of({
      response: [
        {
          name: 'Sonar',
          background: 'assets/backgrounds/sonar.png',
        },
        {
          name: 'Terminal',
          background: 'assets/backgrounds/terminal.png',
        },
        {
          name: 'Prorok Codzienny',
          background: 'assets/backgrounds/prorok.png',
        },
      ],
    } as BaseResponse<LatestApp[]>);
    this.http
      .get('')
      .pipe(map((res: any) => (res as BaseResponse<LatestApp[]>).response)); //TODO ERROR HANDLING
  }
}
