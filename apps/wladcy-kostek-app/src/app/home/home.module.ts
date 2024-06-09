import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './home.routes';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { QuickBarComponent } from './components/quick-bar/quick-bar.component';
import { UiModule } from '@wka/ui';
import { AppsService } from './services/apps.service';
import { NewsService } from '../../shared/services/news.service';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
  exports: [RouterModule],
  declarations: [HomeComponent, QuickBarComponent],
  providers: [provideRouter(routes), AppsService, NewsService],
})
export class HomeModule {}
