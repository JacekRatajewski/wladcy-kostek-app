import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[wkaUiTooltip]' })
export class TooltipDirective implements AfterViewInit {
  @Input() tooltip = '';
  private element: HTMLElement;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.element = this.el.nativeElement;
    this.renderer.addClass(this.element, 'wka-tooltip');
  }

  ngAfterViewInit() {
    if (this.tooltip)
      this.renderer.setAttribute(this.element, 'data-tooltip', this.tooltip);
  }
  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltip) this.showTooltip(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) this.showTooltip(false);
  }

  private showTooltip(show: boolean) {
    show
      ? this.renderer.addClass(this.element, 'wka-tooltip--shown')
      : this.renderer.removeClass(this.element, 'wka-tooltip--shown');
  }
}
