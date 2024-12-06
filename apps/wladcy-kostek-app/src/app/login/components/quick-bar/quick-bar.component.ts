import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { AuthService } from '../../services/auth.service';
import { ButtonColors, SessionService } from '@wka/ui';

@Component({
  selector: 'wka-quick-bar',
  templateUrl: './quick-bar.component.html',
  styleUrls: ['./quick-bar.component.scss'],
})
export class QuickBarComponent implements OnInit {
  @ViewChild('googleBtn') googleBtn!: ElementRef;
  @Input() type: 'signIn' | 'signUp' = 'signIn';
  public ButtonColors = ButtonColors;

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: SocialAuthService,
    private aService: AuthService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.initForms();

    this.authService.authState.subscribe((user) => {
      if (user) {
        this.aService.googleLogin(user.idToken).subscribe({
          next: (value) => {
            if (value) {
              this.sessionService.setSessionKey(value.email as string);
              this.sessionService.login(value);
            } else {
              alert('Logowanie przez google się nie powiodło!');
            }
          },
        });
      }
    });
  }

  private initForms(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public goToSignUp(event: any) {
    this.router.navigateByUrl('login/signUp');
  }

  public signInWithGoogle(event: any) {
    this.googleBtn?.nativeElement.click();
  }

  public signIn(event: any) {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { login, password } = this.loginForm.value;

    this.aService.login(login, password).subscribe({
      next: (value) => {
        if (value) {
          this.sessionService.setSessionKey(value.email as string);
          this.sessionService.login(value);
        } else {
          alert('Logowanie się nie powiodło!');
        }
      },
    });
  }

  public signUp(event: any) {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { login, password, confirmPassword, email } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('Hasła nie pasują!');
      return;
    }

    this.aService.register(login, password, email).subscribe({
      next: (value) => {
        if (value) {
          this.router.navigateByUrl('login/signIn');
          alert('Rejestracja się powiodła!');
        } else {
          alert('Rejestracja się nie powiodła!');
        }
      },
    });
  }
}
