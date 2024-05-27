import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { LatestApp } from './models/latest-app.model';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../../../shared/models/base-response.model';

@Injectable({ providedIn: 'root' })
export class QuickBarService {
  constructor(private http: HttpClient) {}

  getLatestApps$(): Observable<LatestApp[]> {
    return this.http
      .get(
        'https://requestly.tech/api/mockv2/latestApps?rq_uid=ABNVuWTLMuNcPfsNEiRKv3e8lsd2'
      )
      .pipe(map((res: any) => (res as BaseResponse<LatestApp[]>).response));
  }
}
