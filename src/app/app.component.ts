import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <custom-settings></custom-settings>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
