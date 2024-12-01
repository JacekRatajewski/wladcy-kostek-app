import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './bonuses.routes';
import { CommonModule } from '@angular/common';
import { UiModule } from '@wka/ui';
import { BonusesComponent } from './components/bonuses/bonuses.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
  ],
  exports: [RouterModule],
  declarations: [BonusesComponent],
  providers: [provideRouter(routes)],
})
export class BonusesModule {}
