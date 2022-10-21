import { Directive, ElementRef, DoCheck, OnInit } from '@angular/core';

@Directive({
  selector: '[preHighlight]',
  standalone: true,
})
export class PreHighlightDirective implements OnInit, DoCheck {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.display = 'none';
  }

  ngDoCheck(): void {
    if (this.el.nativeElement.innerHTML) {
      let target: string = this.el.nativeElement.innerHTML;
      target = target.replace(/&lt;highlight&gt;/g, '<span style="color:yellow">');
      target = target.replace(/&lt;\/highlight&gt;/g, '</span>');
      this.el.nativeElement.innerHTML = target;
      this.el.nativeElement.style.display = 'block';
    }
  }
}
