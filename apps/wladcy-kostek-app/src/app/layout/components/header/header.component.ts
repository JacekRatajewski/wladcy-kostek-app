import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonColors } from '@wka/ui';

@Component({
  selector: 'wka-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public ButtonColors = ButtonColors;
  constructor(private router: Router) {}
  public signIn() {
    this.router.navigateByUrl('login/signIn')
  }
}
