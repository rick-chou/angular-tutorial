import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BaseComponent } from '@library/theme-selector/base.component';

import { getRandomIcon } from '@utils/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent {
  svg = getRandomIcon();

  constructor(private modal: NzModalService) {
    super();
  }
  ngOnInit() {}
}
