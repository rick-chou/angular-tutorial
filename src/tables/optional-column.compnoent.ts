import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';

interface DataItem {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-optional-column-table',
  standalone: true,
  imports: [NzTableModule, NzCheckboxModule, CommonModule, NzDropDownModule, FormsModule],
  template: `
    <nz-table #nzTable [nzData]="data" nzTableLayout="fixed">
      <thead>
        <tr>
          <th class="flex items-center justify-between">
            id
            <nz-filter-trigger [(nzVisible)]="visible" [nzActive]="searchValue.length > 0" [nzDropdownMenu]="menu">
              <i nz-icon nzType="setting" nzTheme="outline"></i>
            </nz-filter-trigger>
          </th>
          <th *ngIf="display_column.includes('name')">Name</th>
          <th *ngIf="display_column.includes('age')">Age</th>
          <th *ngIf="display_column.includes('address')">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data; index as i">
          <td>{{ data.id }}</td>
          <td *ngFor="let i of display_column">{{ data[i] }}</td>
        </tr>
      </tbody>
    </nz-table>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        <div class="search-box">
          <nz-checkbox-wrapper style="width: 100%" (nzOnChange)="handleColumnChange($event)">
            <div class="p-4">
              <div *ngFor="let i of all_display_column">
                <label nz-checkbox [nzValue]="i" [ngModel]="true">{{ i }}</label>
              </div>
            </div>
          </nz-checkbox-wrapper>
        </div>
      </div>
    </nz-dropdown-menu>
  `,
})
export class OptionalColumnTableComponent {
  public searchValue = '';
  public visible = false;
  public checked = true;
  public data: DataItem[] = [];
  public all_display_column = ['name', 'age', 'address'];
  public display_column = ['name', 'age', 'address'];

  ngOnInit() {
    Array.from({ length: 100 }).map((__, idx) => {
      this.data.push({
        id: idx + 1,
        name: 'Rick Zhou',
        age: 18,
        address: 'HangZhou',
      });
    });
  }

  public handleColumnChange(e: string[]) {
    this.display_column = e;
  }
}
