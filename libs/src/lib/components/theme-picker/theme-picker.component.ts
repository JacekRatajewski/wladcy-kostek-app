import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Theme } from './model/theme.model';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wka-ui-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrl: './theme-picker.component.scss',
})
export class ThemePickerComponent implements OnInit, OnDestroy {
  @Input() themes: Theme[] = [];
  private themeSub!: Subscription;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSub = this.themeService.theme$.subscribe({
      next: (key) => {
        const theme = this.themes.find((theme: Theme) => theme.key === key);
        if (theme) {
          this.themes.forEach((theme: Theme) => (theme.selected = false));
          theme.selected = true;
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.themeSub.unsubscribe();
  }

  selectTheme(key: string) {
    this.themeService.setTheme(key);
  }
}
