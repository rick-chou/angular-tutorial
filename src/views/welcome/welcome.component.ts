import { Component } from '@angular/core';

import { SettingsComponent } from '@library/theme-selector/component/settings/settings.component';
import { HeroComponent } from '@components/hero/hero.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SettingsComponent, HeroComponent, FooterComponent],
  template: `
    <app-hero></app-hero>
    <app-footer></app-footer>
  `,
})
export class WelcomeComponent {}
