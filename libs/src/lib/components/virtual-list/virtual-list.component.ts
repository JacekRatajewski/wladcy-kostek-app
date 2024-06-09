import { Component, Input } from '@angular/core';

@Component({
  selector: 'wka-ui-virtual-list',
  templateUrl: './virtual-list.component.html',
  styleUrl: './virtual-list.component.scss',
})
export class VirtualListComponent {
  @Input() length!: number;
}
