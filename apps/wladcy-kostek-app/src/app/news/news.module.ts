import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './news.routes';
import { CommonModule } from '@angular/common';
import { UiModule } from '@wka/ui';
import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsService } from '../../shared/services/news.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
  ],
  exports: [RouterModule],
  declarations: [NewsComponent, NewsListComponent],
  providers: [provideRouter(routes), NewsService],
})
export class NewsModule {}
