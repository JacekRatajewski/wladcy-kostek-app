import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore: Sometimes installed modules are not exacly compatible with .ts but they work.
import Cp from '../../shared/external/dice.scripts.js';

@Component({
  selector: 'wka-error',
  templateUrl: 'error.component.html',
  styleUrl: 'error.component.scss',
})
export class ErrorComponent implements OnInit, AfterViewInit {
  @ViewChild('diceContainer') diceContainer!: ElementRef;
  public errorCode = '';
  private defaultConfig = {
    framerate: 1 / 60,
    color_spotlight: 0xefdfd5,
    shadows: false,
    theme_customColorset: {
      name: 'Error',
      category: 'Damage Types',
      foreground: '#000000',
      background: '#FF5454',
      outline: 'white',
      description: 'Error',
    },
    theme_material: 'plastic',
    gravity_multiplier: 200,
    light_intensity: 0.7,
    baseScale: 125,
    strength: 1.5,
  };
  private errror_messages = {
    404: 'Opss... Coś poszło nie tak.',
  };
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.errorCode = this.route.snapshot.paramMap.get('error_code') ?? '404';
    if (this.errorCode === 'undefined') this.errorCode = '404';
  }

  ngAfterViewInit() {
    const Box = new Cp(
      `#${this.diceContainer.nativeElement.id}`,
      this.defaultConfig
    );
    Box.initialize()
      .then(() => {
        setTimeout(async () => {
          await Box.roll(
            `${this.errorCode?.length}d10@${this.errorCode
              ?.split('')
              .join(',')}`
          );
        }, 300);
      })
      .catch((e: any) => console.error(e));
  }

  public getErrorMessage() {
    return this.errror_messages[this.errorCode as keyof object];
  }

  public goHome(event: any) {
    this.router.navigate(['']);
  }
}
