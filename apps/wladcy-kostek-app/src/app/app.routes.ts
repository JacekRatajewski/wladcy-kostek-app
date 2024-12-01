import { Route } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'myBonuses',
        loadChildren: () => import('./bonuses/bonuses.module').then((m) => m.BonusesModule),
      }
    ],
  },
  {
    path: 'error/:error_code',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
