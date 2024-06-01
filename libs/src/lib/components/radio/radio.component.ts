import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wka-ui-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent {
  @Input() id!:string;
  @Input() name!:string;
  @Input() value!:string;
  @Input() checked!:boolean;
}
