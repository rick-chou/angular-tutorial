import { Component } from '@angular/core';
import { HighlightDirective } from '@directives/highlight.directive';
import { PreHighlightDirective } from '@directives/pre-highlight.directive';

@Component({
  selector: 'directive',
  standalone: true,
  imports: [HighlightDirective, PreHighlightDirective],
  templateUrl: './directive.component.html',
})
export class DirectiveComponent {
  code_demo = {
    NgClass: `## NgClass
<div <highlight>[ngClass]="isSpecial ? 'special' : ''"</highlight>>
  This div is special
</div>`,
    NgStyle: `## NgStyle
<div <highlight>[ngStyle]="font-size : isSpecial ? '24px' : '12px'"</highlight>>
  This div is special
</div>`,
    NgModel: `## NgModel
<input <highlight>[(ngModel)]="inputValue"</highlight>

<-- or / equal -->

<input <highlight>[ngModel]="inputValue"</highlight> <highlight>(ngModelChange)="setInputValue($event)"</highlight>>

setInputValue($event) {
  this.inputValue = $event.target.value
}
`,
    NgIf: `## NgIf
<-- basic -->
<div <highlight>*ngIf="isShow"</highlight>></div>

<-- else block -->
<div <highlight>*ngIf="isShow;else empty"</highlight>></div>  

<highlight><ng-template #empty>
  <div>empty</div>
</ng-template></highlight>`,
    NgFor: `## NgFor
<div <highlight>*ngFor="let item of items"</highlight>>{{item.name}}</div>

items = [
  { name: 'rick' },
  { name: 'chou' },
]

<-- index / count / first / last / even / odd -->
<div <highlight>*ngFor="let item of items;index as i"</highlight>>{{item.name}}</div>`,
    NgSwitch: `## NgSwitch / NgSwitchCase / NgSwitchDefault
<div <highlight>[ngSwitch]="currentItem.feature"</highlight>>
  <app-stout-item   <highlight>*ngSwitchCase="'stout'"</highlight>></app-stout-item>
  <app-device-item  <highlight>*ngSwitchCase="'slim'"</highlight>></app-device-item>
  <app-lost-item    <highlight>*ngSwitchCase="'vintage'"</highlight>></app-lost-item>
  <app-best-item    <highlight>*ngSwitchCase="'bright'"</highlight>></app-best-item>
  
  <!-- . . . -->
  <app-unknown-item <highlight>*ngSwitchDefault</highlight>></app-unknown-item>
</div>`,
    CustomAttributeDirective: `## Custom Attribute Directive

## 使用属性型指令，可以更改 DOM 元素和 Angular 组件的外观或行为。

// direction
import { Directive, ElementRef } from '@angular/core';

<highlight>@Directive({
  selector: '[appHighlight]',
})</highlight>
export class HighlightDirective {
  constructor(private el: ElementRef) {
    <highlight>this.el.nativeElement.style.color = 'yellow';</highlight>
  }

  // You can implement the following lifecycle in a directive
  // ngOnChanges
  // ngOnInit
  // ngDoCheck
  // ngOnDestroy
}

<-- apply -->
<p <highlight>appHighlight</highlight>>Highlight me!</p>
`,
    HandlingUserEvents: `## Handling user events
// direction
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'yellow';
  }

  <highlight>@HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }</highlight>

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`,
    PassingValuesIntoAnAttributeDirective: `## Passing values into an attribute directive
// direction
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  <highlight>@Input() appHighlight = '';
  @Input() defaultColor = '';</highlight>

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

<-- apply -->
<p <highlight>appHighlight="red"</highlight>>Highlight me!</p>

<-- or use default value -->
<p <highlight>appHighlight defaultColor="yellow"</highlight>>Highlight me!</p>
`,
    StructuralDirectives: `## Structural directives

## 应用结构指令时，它们通常以星号 * 为前缀，例如 *ngIf。
## Angular 会将结构指令前面的星号转换为围绕宿主元素及其后代的 <ng-template>。
## 简而言之 你可以理解为前者是后者的简写模式/语法🍬

<-- shorthand use -->
<div <highlight>*ngIf="hero"</highlight> class="name">{{hero.name}}</div>

<-- longhand use -->
<ng-template <highlight>[ngIf]="hero"</highlight>>
  <div class="name">{{hero.name}}</div>
</ng-template>

<-- shorthand use -->
<div
  <highlight>*ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById"</highlight>
  [class.odd]="odd">
  ({{i}}) {{hero.name}}
</div>

<-- longhand use -->
<ng-template 
  <highlight>ngFor 
  let-hero 
  [ngForOf]="heroes"
  let-i="index" 
  let-odd="odd" 
  [ngForTrackBy]="trackById"</highlight>>
  <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
</ng-template>`,
  };
}
