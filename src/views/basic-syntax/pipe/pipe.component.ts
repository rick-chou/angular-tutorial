import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObjIsEmptyPipe } from '@pipes/obj-is-empty.pipe';

@Component({
  selector: 'pipe',
  standalone: true,
  imports: [ObjIsEmptyPipe, CommonModule],
  template: `<div *ngIf="empty | objIsEmpty"></div>`,
})
export class PipeComponent {
  empty = {};
}
