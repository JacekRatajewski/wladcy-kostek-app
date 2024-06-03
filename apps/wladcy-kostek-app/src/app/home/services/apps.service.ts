import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { LatestApp } from './models/latest-app.model';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '@wka/ui';

@Injectable({ providedIn: 'root' })
export class AppsService {
  constructor(private http: HttpClient) {}

  getLatestApps$(): Observable<LatestApp[]> {
    return this.http
      .get(
        `${process.env.API_URL}/latestApps`
      )
      .pipe(map((res: any) => (res as BaseResponse<LatestApp[]>).response));
  }
}
