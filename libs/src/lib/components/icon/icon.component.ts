import { Component, Input } from '@angular/core';

@Component({
  selector: 'wka-ui-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() public path!: string;
  @Input() public class!: string;
  @Input() public tooltip!: string;
  @Input() public id!: string | number;
  @Input() public active = false;
  @Input() public static = false;
  @Input() public disabled = false;
}
