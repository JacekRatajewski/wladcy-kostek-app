import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wka-ui-spinner',
  templateUrl: 'spinner.component.html',
  styleUrl: 'spinner.component.scss',
})
export class SpinnerComponent {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  public show() {
    this.isLoadingSubject.next(true);
  }

  public hide() {
    this.isLoadingSubject.next(false);
  }
}
