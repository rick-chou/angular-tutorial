import { Component } from '@angular/core';
import { TimeStatusCharts } from '@charts/time-status-charts/index.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [TimeStatusCharts],
  template: `
    <div class="flex justify-center items-center w-full">
      <div class="w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        <h1 class="font-bold text-lg italic"><a target="_blank" href="https://www.npmjs.com/package/@rickzhou/ngx-cdk">@rickzhou/ngx-cdk [ time-status-chart component ]</a></h1>
        <app-time-status-big-data-charts></app-time-status-big-data-charts>
      </div>
    </div>
  `,
})
export class ChartsComponent {}
