import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { News } from '../../../../shared/models/news.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'wka-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  @Input() items$!: Observable<News[]>;
  public news: News[] = [];
  ngOnInit(): void {
    this.items$?.subscribe({
      next: (items) => (this.news = items),
    });
  }
}
