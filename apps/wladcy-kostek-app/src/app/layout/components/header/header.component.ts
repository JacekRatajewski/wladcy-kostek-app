import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonColors, MenuItem, SessionService } from '@wka/ui';
import { IUser } from '../../../login/services/model/user.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'wka-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public ButtonColors = ButtonColors;
  public isMenuOpen$ = new BehaviorSubject<boolean>(false);
  public menuItems: MenuItem[] = [
    {
      class: 'font-text',
      name: 'Zobacz Profil',
      click: () => {return},
    },
    {
      class: 'font-text',
      name: 'Odbierz Kupon',
      click: () => {return},
    },
    {
      class: 'text-secondary font-text',
      name: 'Wyloguj',
      click: () => {
        this.sessionService.logout();
        this.router.navigateByUrl('/');
      },
    },
  ];
  isLogged = false;

  constructor(private router: Router, public sessionService: SessionService) {}
  ngOnInit(): void {
    this.sessionService.isLogged$.subscribe((value) => {
      this.isLogged = value;
    });
  }
  public signIn() {
    this.router.navigateByUrl('login/signIn');
  }

  public session(): IUser {
    return this.sessionService.getSession()?.user as IUser;
  }
}
