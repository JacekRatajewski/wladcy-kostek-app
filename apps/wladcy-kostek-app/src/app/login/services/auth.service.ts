import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse2 } from '@wka/ui';
import { map } from 'rxjs';
import { IUser } from './model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  googleLogin(token: string, id: string) {
    return this.http
      .post(
        `${process.env.API_URL}/auth/google`,
        { token, id },
        {
          headers: { 'X-Skip-Authorization': 'true' },
        }
      )
      .pipe(map((res: any) => (res as BaseResponse2<IUser>).result));
  }

  login(login: string, password: string) {
    return this.http
      .post(`${process.env.API_URL}/auth/login`, { login, password })
      .pipe(map((res: any) => (res as BaseResponse2<IUser>).result));
  }

  register(login: string, password: string, email: string) {
    return this.http
      .post(`${process.env.API_URL}/auth/register`, { login, password, email })
      .pipe(map((res: any) => (res as BaseResponse2<IUser>).result));
  }
}
