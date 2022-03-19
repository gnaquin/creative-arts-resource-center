import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  contactButton() {
    console.log('contact button clicked');
    window.location.href =
      'https://forms.gle/V3DSbQoPYMVzSxr78';
  };

  donateButton() {
    console.log('donate button clicked');
  };

  registerButton() {
    console.log('register button clicked');
  };

}
