import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './login.routes';
import { CommonModule } from '@angular/common';
import { UiModule } from '@wka/ui';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { QuickBarComponent } from './components/quick-bar/quick-bar.component';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    FormsModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  declarations: [SignInComponent, SignUpComponent, QuickBarComponent],
  providers: [provideRouter(routes), AuthService],
})
export class LoginModule {}
