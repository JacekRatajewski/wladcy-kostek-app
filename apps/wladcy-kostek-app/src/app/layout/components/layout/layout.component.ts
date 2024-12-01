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
import { BehaviorSubject, delay, Subscription, timer } from 'rxjs';

@Component({
  selector: 'wka-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('layout') layout!: ElementRef;
  private themeSub!: Subscription;
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor(private themeService: ThemeService, private renderer: Renderer2) {
    const dummy$ = timer(1000);
    dummy$.subscribe({
      next: () => {
        this.isLoading$.next(false);
      },
    });
    this.isLoading$.pipe(delay(1)).subscribe({
      next: (v) => {
        if (!v) {
          this.renderer.setAttribute(
            this.layout.nativeElement,
            'data-theme',
            'dark'
          );
        }
      },
    });
  }

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
