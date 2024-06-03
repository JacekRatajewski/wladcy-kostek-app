import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseResponse, handleError } from '@wka/ui';
import { News } from './models/news.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
  constructor(private http: HttpClient) {}

  getHomeNews$(pageSize?: number): Observable<News[]> {
    return this.http
      .get(
        `${process.env.API_URL}/${
          pageSize ? 'news' : 'newsAll'
        }`
      )
      .pipe(map((res: any) => (res as BaseResponse<News[]>).response));
  }
}
