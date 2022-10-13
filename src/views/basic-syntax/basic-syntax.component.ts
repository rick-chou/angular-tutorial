import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getRandomIcon } from '@utils/index';

import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-basic-syntax',
  standalone: true,
  imports: [InlineSVGModule, RouterModule],
  templateUrl: './basic-syntax.component.html',
})
export class BasicSyntaxComponent {
  @ViewChild('more') moreRef!: ElementRef;
  private animateStart = ['transition', 'ease-out', 'duration-200'];
  private animateEnd = ['transition', 'ease-in', 'duration-150'];

  public svg = getRandomIcon();

  constructor() {
    document.addEventListener('click', () => {
      const isHidden = Array.from(this.moreRef.nativeElement.classList).includes('hidden');
      if (!isHidden) {
        this.hiddenNavMore();
      }
    });
  }

  public handleToggleMore(event: Event) {
    event.stopPropagation();
    const isHidden = Array.from(this.moreRef.nativeElement.classList).includes('hidden');
    if (isHidden) {
      this.showNavMore();
    } else {
      this.hiddenNavMore();
    }
  }

  public hiddenNavMore() {
    this.moreRef.nativeElement.classList.remove(...this.animateStart);
    this.moreRef.nativeElement.classList.add('hidden', ...this.animateEnd);
  }

  public showNavMore() {
    this.moreRef.nativeElement.classList.remove('hidden', ...this.animateEnd);
    this.moreRef.nativeElement.classList.add(...this.animateStart);
  }
}
