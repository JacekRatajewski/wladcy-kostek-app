import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppsService } from '../../services/apps.service';
import { LatestApp } from '../../services/models/index';
import { SessionService, SpinnerComponent } from '@wka/ui';
import { spinner } from '@wka/ui';

@Component({
  selector: 'wka-quick-bar',
  templateUrl: './quick-bar.component.html',
  styleUrl: './quick-bar.component.scss',
})
export class QuickBarComponent {
  @ViewChild(SpinnerComponent) spinnerComponent!: SpinnerComponent;
  public latestApps$: Subject<LatestApp[]> = new Subject();
  constructor(public quickbarService: AppsService, public sessionService: SessionService) {}
}
