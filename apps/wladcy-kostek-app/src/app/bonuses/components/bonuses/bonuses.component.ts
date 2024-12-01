import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SpinnerComponent, spinner } from '@wka/ui';
import { BehaviorSubject, delay, of, Subject, timer } from 'rxjs';
import { BonusesService } from '../../services/bonuses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bonus, BonusInfo } from '../../models/bonus.model';

@Component({
  selector: 'wka-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrl: './bonuses.component.scss',
})
export class BonusesComponent {
  @ViewChild(SpinnerComponent) spinnerComponent!: SpinnerComponent;
  public error!: string;
  name = '';
  id!: string | null;
  bonusInfo!: Bonus;
  bonusesInfos: BonusInfo[] = [
    {
      season: 'Sezon 5',
      system: 'Zew Cthulhu 7ed',
      bonuses: [
        'Przerzut testu umiejętności/cechy.',
        'Przerzut testu rozwoju.',
        'Dodatkowe 1k10 punktów szczęścia na koniec sesji.',
        'Dodatkowe 1k4 punktów poczytalności na koniec sesji.',
        'Dodatkowe +2 kości bonusowe do rzutu.',
        'Dodatkowy przerzut cech przy tworzeniu nowej postaci.',
        'Dodatkowy pakiet doświadczeń do nowej postaci.',
      ],
    },
    {
      season: 'Sezon 5',
      system: 'Dungeons & Dragons 5ed',
      bonuses: [
        'Dodatkowa Inspiracja.',
        'Dodatkowa Przewaga(Advantage) do rzutu.',
        'Usunięcie Utrudnienia(Disadvantage) do rzutu.',
        'Dodatkowe 1k4 do Inicjatywy na początek walki.',
        'Dodatkowy przerzut kostek obrażeń.',
        'Dodatkowy przerzut testu przeżycia (Death Saving Throw).',
        'Dodatkowy przerzut atrybutów przy tworzeniu nowej postaci.',
      ],
    },
  ];
  currentBonusInfo: BonusInfo | undefined;
  constructor(
    private bonusesService: BonusesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.bonusesService.getBonus$(parseInt(this.id)).subscribe({
        next: (value) => {
          this.bonusInfo = value;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngAfterContentChecked() {
    const gridContainer = document.querySelector(
      '.wka-grid-wrapper .wka-grid-content'
    );
    if (
      gridContainer &&
      gridContainer.classList.contains('wka-fixed-full_screen')
    ) {
      return;
    }
    document
      .querySelector('.wka-grid-wrapper .wka-grid-content')
      ?.classList.add('wka-fixed-full_screen');
  }

  getMyBonuses() {
    this.bonusesService.getBonusId$(this.name).subscribe({
      next: (value) => {
        this.router.navigateByUrl(`/myBonuses/${value}`);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onChange(event: Event) {
    this.name = (event.target as any).value as string;
  }

  selectBonusInfo(event: Event) {
    this.currentBonusInfo = this.bonusesInfos.find(x => x.system === (event.target as any).value as string)
  }
}
