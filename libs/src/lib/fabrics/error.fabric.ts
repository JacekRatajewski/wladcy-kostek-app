import { Observable, Observer } from 'rxjs';
import { BaseResponse } from '../models/base-response.model';

export function handleError() {
  return (source: Observable<any>): Observable<any> => {
    return new Observable((observer: Observer<any>) => {
      const sub = source.subscribe({
        next: (v) =>
          v.error ? observer.error(v.error) : observer.next(v.error),
        error: (error) => observer.error(error.error),
        complete: () => observer.complete(),
      });
      return () => {
        sub.unsubscribe()
      };
    });
  };
}
