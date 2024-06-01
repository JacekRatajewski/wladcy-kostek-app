import { NgModule, importProvidersFrom, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, provideRouter } from '@angular/router';
import { HomeModule } from './home/home.module';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UiModule } from '@wka/ui';
import { provideServiceWorker } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UiModule,
    LayoutModule,
    HomeModule,
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(appRoutes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    { provide: 'featureFlagPath', useValue: 'assets/json/feature-flags.json' },
  ],
  declarations: [AppComponent, ErrorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
