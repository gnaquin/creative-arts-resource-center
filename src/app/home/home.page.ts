import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  contactButton() {
    console.log('contact button clicked');
    window.location.href =
      'https://docs.google.com/forms/d/e/1FAIpQLSdWPif5D-Ige00RHWZ4w2t9YB-i9azPhQu17xgf--Ov4q8DAg/viewform?usp=sf_link';
  };

}
