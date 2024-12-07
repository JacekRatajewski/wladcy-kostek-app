import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { worker } from './mock/init';
import { isDevMode } from '@angular/core';
const init = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

if (isDevMode()) {
  init();
} else {
  init();
}
