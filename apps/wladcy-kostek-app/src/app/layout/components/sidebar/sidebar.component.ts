import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SidebarItem, SidebarItemType } from './models';

@Component({
  selector: 'wka-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public items: SidebarItem[] = [
    {
      tooltip: 'Home',
      iconPath: 'assets/icons/home.svg',
      route: '',
      onClick: this.onClick.bind(this)
    },
    {
      tooltip: 'Moje aplikacje',
      iconPath: 'assets/icons/apps.svg',
      route: '/apps',
      onClick: this.onClick.bind(this)
    },
    {
      tooltip: 'Nowości ze świata papierowego RPG',
      iconPath: 'assets/icons/news.svg',
      route: '/news',
      onClick: this.onClick.bind(this)
    },
    {
      tooltip: 'Ustawienia',
      iconPath: 'assets/icons/settings.svg',
      route: '/settings',
      type: SidebarItemType.settings,
      onClick: () => { return }
    },
  ];
  public SidebarItemType = SidebarItemType;
  public activeItemId$ = new BehaviorSubject<number>(0);
  constructor(private router: Router) {}
  onClick(id: number) {
    this.activeItemId$.next(id);
  }
}
