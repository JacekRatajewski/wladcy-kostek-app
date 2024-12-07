import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wka-ui-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() type = 'text';
  @Input() maxlength!: number;
  @Input() icon!: string;
  @Input() placeholder!: string;
  @Input() public onChange = (event: any) => {
    this.change.emit(`${event.currentTarget.value}`);
    event.preventDefault();
    event.stopPropagation();
  };
  @Output() change: EventEmitter<string> = new EventEmitter();
}
