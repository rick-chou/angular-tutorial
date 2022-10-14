import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { BaseComponent } from '../../base.component';
import { TailwindColor } from '../../interfaces/tailwind-colors.interface';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'custom-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {
  colorSub!: Subscription;
  isDarkTheme!: Observable<boolean>;
  colorsOpen = false;
  loaded = false;
  colors: TailwindColor[] = [];
  selectedColor!: TailwindColor;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.getDarkTheme();
    this.colors = this.colorService.getAllColors();
    this.colorSub = this.colorService.getCurrentColor().subscribe((color: TailwindColor) => {
      this.selectedColor = color;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 300);
  }

  changeColor(color: TailwindColor): void {
    this.colorService.setCurrentColor(color);
  }

  toggleDarkTheme(dark: boolean): void {
    this.themeService.setDarkTheme(dark);
  }

  toggleColors(): void {
    this.colorsOpen = !this.colorsOpen;
  }

  override ngOnDestroy(): void {
    this.colorSub.unsubscribe();
  }
}
