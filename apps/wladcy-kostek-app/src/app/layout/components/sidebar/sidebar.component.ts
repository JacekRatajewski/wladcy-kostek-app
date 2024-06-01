import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { SidebarItem, SidebarItemType } from './models';
import { DialogComponent } from '@wka/ui';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

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
      route: '/',
      onClick: this.onClick.bind(this),
    },
    {
      tooltip: 'Moje aplikacje',
      iconPath: 'assets/icons/apps.svg',
      route: '/apps',
      onClick: this.onClick.bind(this),
    },
    {
      tooltip: 'Nowości ze świata papierowego RPG',
      iconPath: 'assets/icons/news.svg',
      route: '/news',
      onClick: this.onClick.bind(this),
    },
    {
      tooltip: 'Ustawienia',
      iconPath: 'assets/icons/settings.svg',
      type: SidebarItemType.settings,
      onClick: () => {
        this.dialog.showDialog();
      },
    },
  ];
  public SidebarItemType = SidebarItemType;
  public activeItemId$ = new BehaviorSubject<number>(0);
  @ViewChild(SettingsDialogComponent) dialog!: SettingsDialogComponent;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (!event.urlAfterRedirects.includes('error')) {
          const activeItem = this.items.find(
            (item) => item.route === event.urlAfterRedirects
          );
          this.activeItemId$.next(
            this.items.indexOf(activeItem ?? this.items[0])
          );
        }
      });
  }

  public onClick(id: number) {
    this.activeItemId$.next(id);
  }
}
