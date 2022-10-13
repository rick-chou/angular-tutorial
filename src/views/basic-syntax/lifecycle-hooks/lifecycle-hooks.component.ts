import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lifecycle-hooks',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-indigo-100">
          <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
          <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44"></circle>
          <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
          <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
          <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
        </svg>
      </div>
      <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          *ngFor="let item of lifecycle; index as i"
          class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
        >
          <div class="p-5">
            <div class="flex w-full items-center mb-4">
              <div class="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 mr-4">
                <i>{{ i + 1 }}</i>
              </div>
              <p class="font-bold">{{ item.name }}</p>
            </div>
            <p class="text-sm leading-5 text-gray-900 mb-2">{{ item.desc }}</p>
            <div class="flex items-center justify-between p-2 border-l-2 border-red-600 bg-gray-50 text-gray-800 mb-2 text-xs" *ngIf="item.notice">
              <i>{{ item.notice }}</i>
            </div>
            <li *ngFor="let i of item.usage">{{ i }}</li>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LifecycleHooksComponent {
  public lifecycle = [
    {
      name: 'ngOnChanges',
      desc: '设置或重新设置数据绑定的输入属性时',
      notice: '如果你的组件没有输入属性，或者你使用它时没有提供任何输入属性，那么框架就不会调用 ngOnChanges()',
    },
    {
      name: 'ngOnInit',
      desc: '在第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件',
      notice: '在第一轮 ngOnChanges() 完成之后调用，只调用一次。而且即使没有调用过 ngOnChanges()，也仍然会调用 ngOnInit()（比如当模板中没有绑定任何输入属性时）',
      usage: ['获取初始数据'],
    },
    {
      name: 'ngDoCheck',
      desc: '',
      notice: '',
    },
    {
      name: 'ngAfterContentInit',
      desc: '把外部内容投影进组件视图或指令所在的视图之后调用',
      notice: '第一次 ngDoCheck() 之后调用，只调用一次',
    },
    {
      name: 'ngAfterContentChecked',
      desc: '每检查完被投影到组件或指令中的内容之后调用',
      notice: 'ngAfterContentInit() 和每次 ngDoCheck() 之后调用',
    },
    {
      name: 'ngAfterViewInit',
      desc: '初始化完组件视图及其子视图或包含该指令的视图之后调用',
      notice: '第一次 ngAfterContentChecked() 之后调用，只调用一次',
    },
    {
      name: 'ngAfterViewChecked',
      desc: '做完组件视图和子视图或包含该指令的视图的变更检测之后调用',
      notice: 'ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用',
    },
    {
      name: 'ngOnDestroy',
      desc: '每次销毁指令/组件之前调用并清扫。在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏',
      usage: ['消除副作用'],
    },
  ];
}
