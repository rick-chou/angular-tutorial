import { Component, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { CustomInjector } from './injector/custom-injector.service';
import { ColorService } from './services/color.service';
import { ThemeService } from './services/theme.service';
import { TailwindColor } from './interfaces/tailwind-colors.interface';
import { Requires } from './enum/requires.enum';

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {
  darkTheme!: boolean;
  combinedSub: Subscription;
  enum = {
    requires: Requires,
  };

  primary = '';
  primaryLight = '';
  primaryDark = '';
  primaryAlt = '';
  plain = '-gray-400';
  plainInv = '-gray-600';
  neutral = '-gray-700';
  neutralInv = '-gray-300';
  default = '-gray-800';
  defaultInv = '-gray-100';
  contrast = '-gray-900';
  contrastInv = '-gray-200';
  dark = '-gray-900';
  light = '-gray-100';

  protected colorService: ColorService;
  protected themeService: ThemeService;

  constructor() {
    const injector = CustomInjector.getInstance();
    this.colorService = injector.get(ColorService);
    this.themeService = injector.get(ThemeService);

    this.combinedSub = combineLatest([this.themeService.getDarkTheme(), this.colorService.getCurrentColor()]).subscribe(([theme, color]: [boolean, TailwindColor]) => {
      this.darkTheme = theme;
      this.setPrimaryColor(color);
      this.setGrayscale();
    });
  }

  setGrayscale(): void {
    this.plain = this.darkTheme ? '-gray-600' : '-gray-400';
    this.plainInv = this.darkTheme ? '-gray-400' : '-gray-600';
    this.neutral = this.darkTheme ? '-gray-700' : '-gray-300';
    this.neutralInv = this.darkTheme ? '-gray-300' : '-gray-700';
    this.default = this.darkTheme ? '-gray-800' : '-gray-100';
    this.defaultInv = this.darkTheme ? '-gray-100' : '-gray-800';
    this.contrast = this.darkTheme ? '-gray-900' : '-gray-50';
    this.contrastInv = this.darkTheme ? '-gray-50' : '-gray-900';
  }

  setPrimaryColor(color: TailwindColor): void {
    this.primaryLight = this.darkTheme ? `-${color.name}-300` : `-${color.name}-500`;
    this.primary = this.darkTheme ? `-${color.name}-400` : `-${color.name}-600`;
    this.primaryAlt = this.darkTheme ? `-${color.name}-600` : `-${color.name}-400`;
    this.primaryDark = this.darkTheme ? `-${color.name}-500` : `-${color.name}-700`;
  }

  ngOnDestroy(): void {
    this.combinedSub.unsubscribe();
  }
}
