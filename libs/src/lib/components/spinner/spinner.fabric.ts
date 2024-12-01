import { Observable, Observer } from 'rxjs';
import { SpinnerComponent } from './spinner.component';

export function spinner(spinner: SpinnerComponent) {
  spinner.show();
  return (source: Observable<any>): Observable<any> => {
    return new Observable((observer: Observer<any>) => {
      source.subscribe({
        next: (v) => observer.next(v),
        error: (error) => observer.error(error),
        complete: () => observer.complete(),
      });
      return () => {
        spinner.hide();
      };
    });
  };
}
