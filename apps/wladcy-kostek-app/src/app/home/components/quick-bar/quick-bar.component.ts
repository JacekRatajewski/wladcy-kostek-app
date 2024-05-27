import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuickBarService } from '../../services/quick-bar.service';
import { LatestApp } from '../../services/models/latest-app.model';
import { SpinnerComponent } from '@wka/ui';
import { spinner } from '@wka/ui';

@Component({
  selector: 'wka-quick-bar',
  templateUrl: './quick-bar.component.html',
  styleUrl: './quick-bar.component.scss',
})
export class QuickBarComponent implements AfterViewInit {
  @ViewChild(SpinnerComponent) spinnerComponent!: SpinnerComponent;
  public isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public latestApps$: Subject<LatestApp[]> = new Subject();
  constructor(public quickbarService: QuickBarService) {}
  ngAfterViewInit(): void {
    this.quickbarService
      .getLatestApps$()
      .pipe(spinner(this.spinnerComponent))
      .subscribe({
        next: (res) => this.latestApps$.next(res),
      });
  }
}
