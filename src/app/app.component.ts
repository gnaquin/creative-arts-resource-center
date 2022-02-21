import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Contact', url: '#', icon: 'mail' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    { title: 'Donate', url: '#', icon: 'heart' },
    { title: 'Sign Up', url: '#', icon: 'pencil' }
  ];
  constructor() {}
}
