import { ErrorHandler, NgModule } from '@angular/core';

import { IconComponent } from './components/icon/icon.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { VarDirective } from './directives/var/var.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './components/loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './components/loader/loader.interceptor.service';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandlerInterceptor } from './services/error.interceptor.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonComponent } from './components/button/button.component';

const components = [
  IconComponent,
  LoaderComponent,
  SpinnerComponent,
  ButtonComponent,
];
const services = [LoaderService];
const directives = [TooltipDirective, VarDirective];
const providers = [
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerInterceptor,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
];
@NgModule({
  imports: [CommonModule],
  exports: [...components, ...directives],
  declarations: [...components, ...directives],
  providers: [...services, ...providers],
})
export class UiModule {}
