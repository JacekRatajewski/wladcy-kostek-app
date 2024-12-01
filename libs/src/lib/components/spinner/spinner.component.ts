import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'wka-ui-spinner',
  templateUrl: 'spinner.component.html',
  styleUrl: 'spinner.component.scss',
})
export class SpinnerComponent implements OnInit, AfterViewInit {
  @ViewChild('spinner') spinner!: ElementRef;
  @Input() persistent? = false;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();
  themeSub!: Subscription;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (this.persistent) this.isLoadingSubject.next(true);
  }

  ngAfterViewInit(): void {
    this.themeSub = this.themeService.theme$.subscribe({
      next: (key: string) => {
        this.renderer.setAttribute(
          this.spinner.nativeElement,
          'data-theme',
          key
        );
      },
    });
  }

  public show() {
    if (this.persistent) return;
    this.isLoadingSubject.next(true);
  }

  public hide() {
    if (this.persistent) return;
    this.isLoadingSubject.next(false);
  }
}
