import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, delay } from 'rxjs';
import { QuickBarService } from '../../services/quick-bar.service';
import { LatestApp } from '../../services/models/latest-app.model';

@Component({
  selector: 'wka-quick-bar',
  templateUrl: './quick-bar.component.html',
  styleUrl: './quick-bar.component.scss',
})
export class QuickBarComponent implements OnInit {
  public isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public latestApps$: Subject<LatestApp[]> = new Subject();
  constructor(public quickbarService: QuickBarService) {}
  ngOnInit(): void {
    this.quickbarService.getLatestApps$().pipe(delay(500)).subscribe({
      next: (res) => this.latestApps$.next(res.response),
    });
  }
}
