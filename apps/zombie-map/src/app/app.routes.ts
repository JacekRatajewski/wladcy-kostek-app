import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: 'map',
    loadComponent: () =>
      import('./map/map.component').then((m) => m.MapComponent),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./news/news.component').then((m) => m.NewsComponent),
  },
];
