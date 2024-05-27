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
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
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
