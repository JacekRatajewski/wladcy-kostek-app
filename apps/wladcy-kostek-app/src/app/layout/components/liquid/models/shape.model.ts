import { LiquidConfig } from './index';

export class Shape {
  private element!: HTMLElement;
  private size!: number;
  private config!: LiquidConfig;
  constructor(el: HTMLElement, config: LiquidConfig) {
    this.config = config;
    this.element = el;
    this.size = this.element.offsetWidth;
    this.config.x = this.random(0, 100)*10;
    this.config.y = this.random(0, 100)*10;
    const { min, max } = this.config;
    this.config.vx = this.random(min, max);
    this.config.vy = this.random(min, max);
    this.element.style.transform = `translate(${this.config.x}px,${this.config.y}px)`;
  }

  random = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  boundary() {
    if (this.config.x >= window.innerWidth - this.size) {
      this.config.vx *= -1;
      this.config.x = window.innerWidth - this.size;
    }
    if (this.config.y >= window.innerHeight - this.size) {
      this.config.vy *= -1;
      this.config.y = window.innerHeight - this.size;
    }
    if (this.config.x <= 0) {
      this.config.vx *= -1;
      this.config.x = 0;
    }
    if (this.config.y <= 0) {
      this.config.vy *= -1;
      this.config.y = 0;
    }
  }
  animate() {
    this.config.x += this.config.vx;
    this.config.y += this.config.vy;
    this.element.style.transform = `translate(${this.config.x}px,${this.config.y}px)`;
    this.boundary();
  }
}
