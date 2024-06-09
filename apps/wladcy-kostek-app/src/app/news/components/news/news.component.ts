import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SpinnerComponent, spinner } from '@wka/ui';
import { News } from '../../../../shared/models/news.model';
import { NewsService } from '../../../../shared/services/news.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'wka-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements AfterViewInit {
  @ViewChild(SpinnerComponent) spinnerComponent!: SpinnerComponent;
  public news$: Subject<News[]> = new Subject();
  public error!: string;

  constructor(private newsService: NewsService) {}

  ngAfterViewInit(): void {
    this.newsService
      .getNews$()
      .pipe(spinner(this.spinnerComponent))
      .subscribe({
        next: (news: News[]) => (this.news$.next(news)),
        error: (err) => (this.error = err),
      });
  }
}
