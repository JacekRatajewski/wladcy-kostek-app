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
  worker(process.env.API_URL).start().then(init);
} else {
  init();
}
