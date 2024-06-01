import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ThemeService } from '@wka/ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wka-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('layout') layout!: ElementRef;
  private themeSub!: Subscription;
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.themeSub = this.themeService.theme$.subscribe({
      next: (key: string) => {
        this.renderer.setAttribute(
          this.layout.nativeElement,
          'data-theme',
          key
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.themeSub.unsubscribe();
  }
}
