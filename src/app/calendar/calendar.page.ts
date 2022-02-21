import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  contactButton() {
    console.log('contact button clicked');
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSdWPif5D-Ige00RHWZ4w2t9YB-i9azPhQu17xgf--Ov4q8DAg/viewform?usp=sf_link';
  }
}
