import { Component } from '@angular/core';
import { FeatureFlagsService } from '@wka/ui';
import { FeatureFlags } from '../../../../shared/models/feature-flags.model';

@Component({
  selector: 'wka-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private featureFlagService: FeatureFlagsService) {
    this.featureFlagService.isFeatureEnabled(FeatureFlags.test).subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
}
