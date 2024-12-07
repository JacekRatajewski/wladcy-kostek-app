import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FeatureFlagsService, SpinnerComponent, spinner } from '@wka/ui';
import { FeatureFlags } from '../../../../shared/models/feature-flags.model';
import { News } from '../../../../shared/models/news.model';
import { NewsService } from '../../../../shared/services/news.service';
import { BehaviorSubject, delay, Subject } from 'rxjs';

@Component({
  selector: 'wka-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  @ViewChild(SpinnerComponent) spinnerComponent!: SpinnerComponent;
  public news$: BehaviorSubject<News[]> = new BehaviorSubject([] as News[]);
  public error!: string;
  constructor(
    private featureFlagService: FeatureFlagsService,
    private newsService: NewsService
  ) {
    this.featureFlagService.isFeatureEnabled$(FeatureFlags.test).subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
  ngOnInit(): void {
    this.newsService.getHomeNews$(6).subscribe({
      next: (news: News[]) => this.news$.next(news),
      error: (err) => (this.error = err),
    });
  }

  public openLink(href?: string) {
    if (typeof window !== 'undefined' && window) {
      (window as any).open(href, '_blank').focus();
    }
  }

  public getFullNews() {
    this.newsService
      .getHomeNews$()
      .pipe(spinner(this.spinnerComponent))
      .subscribe({
        next: (news: News[]) => this.news$.next(news),
        error: (err) => (this.error = err),
      });
  }
}
