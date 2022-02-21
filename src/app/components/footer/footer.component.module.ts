import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule ({
    imports: [RouterModule, IonicModule],
    declarations: [FooterComponent],
    exports: [FooterComponent]
})

export class FooterModule{}
