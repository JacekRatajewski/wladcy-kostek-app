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
import { DialogComponent } from './components/dialog/dialog.component';
import { FeatureFlagsService } from './services/feature-flag.service';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { ThemeService } from './services/theme.service';
import { SliderComponent } from './components/slider/slider.component';
import { RadioComponent } from './components/radio/radio.component';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { InputComponent } from './components/input/input.component';
import { SessionService } from './services/session.service';
import { MenuComponent } from './components/menu/menu.component';

const components = [
  IconComponent,
  LoaderComponent,
  SpinnerComponent,
  ButtonComponent,
  DialogComponent,
  ThemePickerComponent,
  SliderComponent,
  RadioComponent,
  InputComponent,
  MenuComponent
];
const modules = [CommonModule, ScrollingModule];
const services = [LoaderService, FeatureFlagsService, ThemeService, SessionService];
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
  CdkVirtualScrollViewport,
];
@NgModule({
  imports: [...modules],
  exports: [...components, ...directives, ...modules],
  declarations: [...components, ...directives,],
  providers: [...services, ...providers],
})
export class UiModule {}
