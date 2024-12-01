import { Routes } from '@angular/router';
import { BonusesComponent } from './components/bonuses/bonuses.component';

export const routes: Routes = [
  { path: 'myBonuses', component: BonusesComponent },
  { path: 'myBonuses/:id', component: BonusesComponent },
];
