"use strict";(self.webpackChunkng_tutorial=self.webpackChunkng_tutorial||[]).push([[717],{1717:(a,r,g)=>{g.r(r),g.d(r,{DirectiveComponent:()=>o});var e=g(4650);let n=(()=>{class t{constructor(i){this.el=i}ngOnInit(){this.el.nativeElement.style.display="none"}ngDoCheck(){if(this.el.nativeElement.innerHTML){let i=this.el.nativeElement.innerHTML;i=i.replace(/&lt;highlight&gt;/g,'<span style="color:yellow">'),i=i.replace(/&lt;\/highlight&gt;/g,"</span>"),this.el.nativeElement.innerHTML=i,this.el.nativeElement.style.display="block"}}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","preHighlight",""]],standalone:!0}),t})(),o=(()=>{class t{constructor(){this.code_demo={NgClass:"## NgClass\n<div <highlight>[ngClass]=\"isSpecial ? 'special' : ''\"</highlight>>\n  This div is special\n</div>",NgStyle:"## NgStyle\n<div <highlight>[ngStyle]=\"font-size : isSpecial ? '24px' : '12px'\"</highlight>>\n  This div is special\n</div>",NgModel:'## NgModel\n<input <highlight>[(ngModel)]="inputValue"</highlight>\n\n<-- or / equal --\x3e\n\n<input <highlight>[ngModel]="inputValue"</highlight> <highlight>(ngModelChange)="setInputValue($event)"</highlight>>\n\nsetInputValue($event) {\n  this.inputValue = $event.target.value\n}\n',NgIf:'## NgIf\n<-- basic --\x3e\n<div <highlight>*ngIf="isShow"</highlight>></div>\n\n<-- else block --\x3e\n<div <highlight>*ngIf="isShow;else empty"</highlight>></div>  \n\n<highlight><ng-template #empty>\n  <div>empty</div>\n</ng-template></highlight>',NgFor:"## NgFor\n<div <highlight>*ngFor=\"let item of items\"</highlight>>{{item.name}}</div>\n\nitems = [\n  { name: 'rick' },\n  { name: 'chou' },\n]\n\n<-- index / count / first / last / even / odd --\x3e\n<div <highlight>*ngFor=\"let item of items;index as i\"</highlight>>{{item.name}}</div>",NgSwitch:'## NgSwitch / NgSwitchCase / NgSwitchDefault\n<div <highlight>[ngSwitch]="currentItem.feature"</highlight>>\n  <app-stout-item   <highlight>*ngSwitchCase="\'stout\'"</highlight>></app-stout-item>\n  <app-device-item  <highlight>*ngSwitchCase="\'slim\'"</highlight>></app-device-item>\n  <app-lost-item    <highlight>*ngSwitchCase="\'vintage\'"</highlight>></app-lost-item>\n  <app-best-item    <highlight>*ngSwitchCase="\'bright\'"</highlight>></app-best-item>\n  \n  \x3c!-- . . . --\x3e\n  <app-unknown-item <highlight>*ngSwitchDefault</highlight>></app-unknown-item>\n</div>',CustomAttributeDirective:"## Custom Attribute Directive\n\n## \u4f7f\u7528\u5c5e\u6027\u578b\u6307\u4ee4\uff0c\u53ef\u4ee5\u66f4\u6539 DOM \u5143\u7d20\u548c Angular \u7ec4\u4ef6\u7684\u5916\u89c2\u6216\u884c\u4e3a\u3002\n\n// direction\nimport { Directive, ElementRef } from '@angular/core';\n\n<highlight>@Directive({\n  selector: '[appHighlight]',\n})</highlight>\nexport class HighlightDirective {\n  constructor(private el: ElementRef) {\n    <highlight>this.el.nativeElement.style.color = 'yellow';</highlight>\n  }\n\n  // You can implement the following lifecycle in a directive\n  // ngOnChanges\n  // ngOnInit\n  // ngDoCheck\n  // ngOnDestroy\n}\n\n<-- apply --\x3e\n<p <highlight>appHighlight</highlight>>Highlight me!</p>\n",HandlingUserEvents:"## Handling user events\n// direction\nimport { Directive, ElementRef, HostListener } from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]',\n})\nexport class HighlightDirective {\n  constructor(private el: ElementRef) {\n    this.el.nativeElement.style.color = 'yellow';\n  }\n\n  <highlight>@HostListener('mouseenter') onMouseEnter() {\n    this.highlight('yellow');\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    this.highlight('');\n  }</highlight>\n\n  private highlight(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n  }\n}",PassingValuesIntoAnAttributeDirective:"## Passing values into an attribute directive\n// direction\nimport { Directive, ElementRef, HostListener, Input } from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]',\n})\nexport class HighlightDirective {\n  <highlight>@Input() appHighlight = '';\n  @Input() defaultColor = '';</highlight>\n\n  constructor(private el: ElementRef) {}\n\n  @HostListener('mouseenter') onMouseEnter() {\n    this.highlight(this.appHighlight || this.defaultColor);\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    this.highlight('');\n  }\n\n  private highlight(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n  }\n}\n\n<-- apply --\x3e\n<p <highlight>appHighlight=\"red\"</highlight>>Highlight me!</p>\n\n<-- or use default value --\x3e\n<p <highlight>appHighlight defaultColor=\"yellow\"</highlight>>Highlight me!</p>\n",StructuralDirectives:'## Structural directives\n\n## \u5e94\u7528\u7ed3\u6784\u6307\u4ee4\u65f6\uff0c\u5b83\u4eec\u901a\u5e38\u4ee5\u661f\u53f7 * \u4e3a\u524d\u7f00\uff0c\u4f8b\u5982 *ngIf\u3002\n## Angular \u4f1a\u5c06\u7ed3\u6784\u6307\u4ee4\u524d\u9762\u7684\u661f\u53f7\u8f6c\u6362\u4e3a\u56f4\u7ed5\u5bbf\u4e3b\u5143\u7d20\u53ca\u5176\u540e\u4ee3\u7684 <ng-template>\u3002\n## \u7b80\u800c\u8a00\u4e4b \u4f60\u53ef\u4ee5\u7406\u89e3\u4e3a\u524d\u8005\u662f\u540e\u8005\u7684\u7b80\u5199\u6a21\u5f0f/\u8bed\u6cd5\u{1f36c}\n\n<-- shorthand use --\x3e\n<div <highlight>*ngIf="hero"</highlight> class="name">{{hero.name}}</div>\n\n<-- longhand use --\x3e\n<ng-template <highlight>[ngIf]="hero"</highlight>>\n  <div class="name">{{hero.name}}</div>\n</ng-template>\n\n<-- shorthand use --\x3e\n<div\n  <highlight>*ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById"</highlight>\n  [class.odd]="odd">\n  ({{i}}) {{hero.name}}\n</div>\n\n<-- longhand use --\x3e\n<ng-template \n  <highlight>ngFor \n  let-hero \n  [ngForOf]="heroes"\n  let-i="index" \n  let-odd="odd" \n  [ngForTrackBy]="trackById"</highlight>>\n  <div [class.odd]="odd">({{i}}) {{hero.name}}</div>\n</ng-template>'}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["directive"]],standalone:!0,features:[e.jDz],decls:57,vars:10,consts:[[1,"px-4","py-16","mx-auto","sm:max-w-xl","md:max-w-full","lg:max-w-screen-xl","md:px-24","lg:px-8","lg:py-20"],[1,"max-w-screen-sm","sm:text-center","sm:mx-auto"],[1,"mb-4","font-sans","text-3xl","font-bold","tracking-tight","text-gray-900","sm:text-4xl","sm:leading-none"],[1,"text-base","text-gray-700","md:text-lg","sm:px-4"],[1,"w-full","my-8","border-gray-300"],[1,"bg-gray-900"],[1,"relative","px-4","py-16","mx-auto","sm:max-w-xl","md:max-w-full","lg:max-w-screen-xl","md:px-24","lg:px-8","lg:py-20"],[1,"absolute","inset-x-0","top-0","items-center","justify-center","hidden","overflow-hidden","md:flex","md:inset-y-0"],["viewBox","0 0 88 88",1,"w-full","max-w-screen-xl","text-gray-800"],["fill","currentColor","fill-opacity","0.4","cx","44","cy","44","r","15.5"],["fill-opacity","0.1","fill","currentColor","cx","44","cy","44","r","44"],["fill-opacity","0.1","fill","currentColor","cx","44","cy","44","r","37.5"],["fill-opacity","0.1","fill","currentColor","cx","44","cy","44","r","29.5"],["fill-opacity","0.1","fill","currentColor","cx","44","cy","44","r","22.5"],[1,"relative","grid","gap-5","sm:grid-cols-4","lg:grid-cols-2"],[1,"p-4","text-center","transition","duration-300","transform","bg-gray-900","rounded","shadow-2xl","hover:scale-105","md:shadow-xl","hover:shadow-2xl"],[1,"prose","prose-gray","text-left"],["text-sm","","preHighlight","",1,"font-semibold","text-gray-200"]],template:function(i,l){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),e._uU(3,"Directive"),e.qZA(),e.TgZ(4,"p",3),e._uU(5,"\u6307\u4ee4\u662f\u4e3a Angular \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u5143\u7d20\u6dfb\u52a0\u989d\u5916\u884c\u4e3a\u7684\u7c7b\u3002\u4f7f\u7528 Angular \u7684\u5185\u7f6e\u6307\u4ee4\uff0c\u4f60\u53ef\u4ee5\u7ba1\u7406\u8868\u5355\u3001\u5217\u8868\u3001\u6837\u5f0f\u4ee5\u53ca\u8981\u8ba9\u7528\u6237\u770b\u5230\u7684\u4efb\u4f55\u5185\u5bb9\u3002"),e.qZA(),e._UZ(6,"hr",4),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7),e.O4$(),e.TgZ(10,"svg",8),e._UZ(11,"circle",9)(12,"circle",10)(13,"circle",11)(14,"circle",12)(15,"circle",13),e.qZA()(),e.kcU(),e.TgZ(16,"div",14)(17,"div",15)(18,"article",16)(19,"pre",17),e._uU(20),e.qZA()()(),e.TgZ(21,"div",15)(22,"article",16)(23,"pre",17),e._uU(24),e.qZA()()(),e.TgZ(25,"div",15)(26,"article",16)(27,"pre",17),e._uU(28),e.qZA()()(),e.TgZ(29,"div",15)(30,"article",16)(31,"pre",17),e._uU(32),e.qZA()()(),e.TgZ(33,"div",15)(34,"article",16)(35,"pre",17),e._uU(36),e.qZA()()(),e.TgZ(37,"div",15)(38,"article",16)(39,"pre",17),e._uU(40),e.qZA()()(),e.TgZ(41,"div",15)(42,"article",16)(43,"pre",17),e._uU(44),e.qZA()()(),e.TgZ(45,"div",15)(46,"article",16)(47,"pre",17),e._uU(48),e.qZA()()(),e.TgZ(49,"div",15)(50,"article",16)(51,"pre",17),e._uU(52),e.qZA()()(),e.TgZ(53,"div",15)(54,"article",16)(55,"pre",17),e._uU(56),e.qZA()()()()()()),2&i&&(e.xp6(20),e.Oqu(l.code_demo.NgClass),e.xp6(4),e.Oqu(l.code_demo.NgStyle),e.xp6(4),e.Oqu(l.code_demo.NgModel),e.xp6(4),e.Oqu(l.code_demo.NgIf),e.xp6(4),e.Oqu(l.code_demo.NgFor),e.xp6(4),e.Oqu(l.code_demo.NgSwitch),e.xp6(4),e.Oqu(l.code_demo.CustomAttributeDirective),e.xp6(4),e.Oqu(l.code_demo.HandlingUserEvents),e.xp6(4),e.Oqu(l.code_demo.PassingValuesIntoAnAttributeDirective),e.xp6(4),e.Oqu(l.code_demo.StructuralDirectives))},dependencies:[n],encapsulation:2}),t})()}}]);