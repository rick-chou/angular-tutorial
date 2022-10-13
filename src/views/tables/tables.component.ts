import { Component } from '@angular/core';
import { OptionalColumnTableComponent } from '@tables/optional-column.compnoent';

@Component({
  selector: 'nz-demo-table-custom-filter-panel',
  standalone: true,
  imports: [OptionalColumnTableComponent],
  template: `
    <div class="flex justify-center items-center w-full">
      <div class="w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
        <h1 class="font-bold text-lg italic">Optional Column Table</h1>
        <app-optional-column-table></app-optional-column-table>
      </div>
    </div>
  `,
})
export class TablesComponent {}
