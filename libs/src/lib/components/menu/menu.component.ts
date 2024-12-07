import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuItem } from './models/menu.models';

@Component({
  selector: 'wka-ui-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() open$: Observable<boolean> = of(false);
  @Input() items: MenuItem[] = [];
}
