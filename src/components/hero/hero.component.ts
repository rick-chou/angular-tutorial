import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from '@library/theme-selector/base.component';
import { HttpService } from '@services/http.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="">
      <div [ngClass]="['bg' + primary]">
        <div class="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32" [ngClass]="['text' + dark]">
          <h1 class="text-5xl font-bold leading-none mb-5 sm:text-6xl xl:max-w-3xl" [ngClass]="['text' + contrast]">Angular's Tutorial</h1>
          <div class="flex flex-wrap justify-center">
            <a type="button" class="px-8 py-3 m-2 text-lg font-semibold rounded" [ngClass]="['bg' + default, 'text' + contrastInv]" routerLink="/home/charts"> Get Start </a>
            <button type="button" class="px-8 py-3 m-2 text-lg border rounded" [ngClass]="['border' + neutral, 'text' + contrast]" routerLink="/basic-syntax/directive">Basic Syntax</button>
          </div>
        </div>
      </div>
      <img src="{{ bannerImgSrc }}" alt="" class="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
    </section>
  `,
})
export class HeroComponent extends BaseComponent {
  public dailySentence = '';
  public bannerImgSrc = 'https://source.unsplash.com/random/4800x3200';
  constructor() {
    super();
  }
}
