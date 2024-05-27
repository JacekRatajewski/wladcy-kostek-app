import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonColors } from './models/colors.model';

@Component({
  selector: 'wka-ui-button',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() class!: string;
  @Input() color = 'primary';
  @Input() public onClick = (event: any) => {
    this.click.emit(event);
  };
  @Output() click: EventEmitter<any> = new EventEmitter();
  public ButtonColors = ButtonColors;
}
