import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule ({
    imports: [RouterModule, IonicModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})

export class HeaderModule{}
