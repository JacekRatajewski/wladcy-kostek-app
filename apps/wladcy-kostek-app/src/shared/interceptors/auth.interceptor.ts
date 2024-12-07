import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly SKIP_AUTH_HEADER = 'X-Skip-Authorization';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = process.env.JWT_TOKEN;

    if (request.headers.has(this.SKIP_AUTH_HEADER)) {
      const headers = request.headers.delete(this.SKIP_AUTH_HEADER);
      request = request.clone({ headers });
      return next.handle(request);
    }

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
