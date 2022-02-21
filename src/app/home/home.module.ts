import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { HeaderModule } from '../components/header/header.component.module';
import { FooterModule } from '../components/footer/footer.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FooterModule,
    HeaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
