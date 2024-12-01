import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse2 } from '@wka/ui';
import { map, Observable } from 'rxjs';
import { Bonus } from '../models/bonus.model';

@Injectable({ providedIn: 'root' })
export class BonusesService {
  constructor(private http: HttpClient) {}

  getBonusId$(name: string): Observable<number> {
    return this.http
      .get(`${process.env.API_URL}/bonus/by/${name}`)
      .pipe(map((res: any) => (res as BaseResponse2<number>).result));
  }

  getBonus$(id: number): Observable<Bonus> {
    return this.http
      .get(`${process.env.API_URL}/bonus/${id}`)
      .pipe(map((res: any) => (res as BaseResponse2<Bonus>).result));
  }
}
