import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonColors } from './models/colors.model';

@Component({
  selector: 'wka-ui-button',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
})
export class ButtonComponent {
  @Input() class!: string;
  @Input() color = ButtonColors.primary;
  @Input() href!: string;
  @Input() public onClick = (event: any) => {
    this.click.emit(event);
    event.preventDefault();
    event.stopPropagation();
  };
  @Output() click: EventEmitter<any> = new EventEmitter();
  public ButtonColors = ButtonColors;
  public openLink() {
    if (typeof window !== 'undefined' && window) {
      (window as any).open(this.href, '_blank').focus();
    }
  }
}
