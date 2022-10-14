import { Component } from '@angular/core';
import { BaseComponent } from '@library/theme-selector/base.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { getRandomIcon } from '@utils/index';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InlineSVGModule, CommonModule, RouterModule],
  template: `
    <div [ngClass]="['bg' + primary]">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <a routerLink="/" class="mr-4 cursor-pointer" [inlineSVG]="svg"></a>
            <ul class="flex items-center space-x-8 lg:flex">
              <li>
                <a routerLink="charts" aria-label="Charts" title="Charts" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Charts</a>
              </li>
              <li>
                <a routerLink="tables" aria-label="Tables" title="Tables" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Tables</a>
              </li>
              <li>
                <a routerLink="editor" aria-label="Editor" title="Editor" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Editor</a>
              </li>
            </ul>
          </div>
          <ul class="flex items-center space-x-8 lg:flex">
            <li><a href="/" aria-label="Sign in" title="Sign in" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Sign in</a></li>
            <li>
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="p-10">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class HomeComponent extends BaseComponent {
  svg = getRandomIcon();

  constructor() {
    super();
  }
}
