import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '@wka/ui';
import { map } from 'rxjs';
import { IUser } from './model/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  googleLogin(token: string) {
    return this.http
      .post(`${process.env.API_URL}/auth/google-login`, { token })
      .pipe(map((res: any) => (res as BaseResponse<IUser>).response));
  }

  login(login: string, password: string) {
    return this.http
      .post(`${process.env.API_URL}/auth/login`, { login, password })
      .pipe(map((res: any) => (res as BaseResponse<IUser>).response));
  }

  register(login: string, password: string, email: string) {
    return this.http
      .post(`${process.env.API_URL}/auth/login`, { login, password, email })
      .pipe(map((res: any) => (res as BaseResponse<IUser>).response));
  }
}
