import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerInterceptor implements ErrorHandler {
  constructor(private router: Router, private zone: NgZone) {}

  handleError(error: any) {
    if (error != undefined && error instanceof HttpErrorResponse) {
      this.zone.run(() => {
        this.router.navigate([`error/${error?.status}`]);
      });
    }
  }
}
