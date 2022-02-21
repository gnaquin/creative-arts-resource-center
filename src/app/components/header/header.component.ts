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
      'https://docs.google.com/forms/d/e/1FAIpQLSdWPif5D-Ige00RHWZ4w2t9YB-i9azPhQu17xgf--Ov4q8DAg/viewform?usp=sf_link';
  };

  donateButton() {
    console.log('donate button clicked');
  };

  registerButton() {
    console.log('register button clicked');
  };

}
