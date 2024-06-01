import { Component, Input } from '@angular/core';

@Component({
  selector: 'wka-ui-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() public isChecked = false;
  public onCheck() {
    this.isChecked = !this.isChecked;
  }
}
