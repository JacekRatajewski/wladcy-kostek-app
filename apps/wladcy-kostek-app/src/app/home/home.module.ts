import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './home.routes';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { QuickBarComponent } from './components/quick-bar/quick-bar.component';
import { UiModule } from '@wka/ui';
import { QuickBarService } from './services/quick-bar.service';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
  exports: [RouterModule],
  declarations: [HomeComponent, QuickBarComponent],
  providers: [provideRouter(routes), QuickBarService],
})
export class HomeModule {}