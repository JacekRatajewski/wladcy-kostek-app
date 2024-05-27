import { Observable, Observer } from 'rxjs';
import { SpinnerComponent } from './spinner.component';

export function spinner(spinner: SpinnerComponent) {
  return (source: Observable<any>): Observable<any> => {
    return new Observable((observer: Observer<any>) => {
      spinner.show();
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
