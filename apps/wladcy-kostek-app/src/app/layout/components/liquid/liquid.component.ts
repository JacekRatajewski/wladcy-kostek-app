import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LiquidConfig, Shape } from './models';


@Component({
  selector: 'wka-liquid',
  templateUrl: 'liquid.component.html',
  styleUrl: 'liquid.component.scss',
})
export class LiquidComponent implements AfterViewInit {
  @ViewChild('wkaShapes') shapesElement!: ElementRef;
  private config: LiquidConfig = {
    min: 0.5,
    max: 1.5,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
  };
  private shapes!: Shape[];
  public elements!: NodeListOf<HTMLElement>;

  ngAfterViewInit(): void {
    this.init();
  }

  init(): void {
    this.elements = (
      this.shapesElement.nativeElement as HTMLElement
    ).querySelectorAll('.wka-shape');
    this.shapes = Array.from(
      this.elements,
      (el: HTMLElement) => new Shape(el, { ...this.config })
    );
    this.update();
  }

  update(): void {
    this.shapes.forEach((shape: Shape) => shape.animate());
    requestAnimationFrame(this.update.bind(this));
  }
}
