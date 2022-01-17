import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home' },
    { label: 'Routing', link: '/routing' },
    { label: 'Form', link: '/form' },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
