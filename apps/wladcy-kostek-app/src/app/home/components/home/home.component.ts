import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FeatureFlagsService, SpinnerComponent, spinner } from '@wka/ui';
import { FeatureFlags } from '../../../../shared/models/feature-flags.model';
import { News } from '../../../../shared/models/news.model';
import { NewsService } from '../../../../shared/services/news.service';
import { delay } from 'rxjs';

@Component({
  selector: 'wka-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild(SpinnerComponent) spinnerComponent!: SpinnerComponent;
  public news: News[] = [];
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
  ngAfterViewInit(): void {
    this.newsService
      .getHomeNews$(6)
      .pipe(spinner(this.spinnerComponent))
      .subscribe({
        next: (news: News[]) => (this.news = news),
        error: (err) => (this.error = err),
      });
  }

  public getFullNews() {
    this.newsService
      .getHomeNews$()
      .pipe(spinner(this.spinnerComponent))
      .subscribe({
        next: (news: News[]) => (this.news = news),
        error: (err) => (this.error = err),
      });
  }
}
