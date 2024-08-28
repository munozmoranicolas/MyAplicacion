import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

/*Importamos MatSlideToggleModule */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/* Importamos MatCheckboxModule*/
import { MatCheckboxModule  } from '@angular/material/checkbox';

/* Importamos MatSortModule */
import { MatSortModule } from '@angular/material/sort';

/* Importamos MatButtonModule*/
import {MatButtonModule} from '@angular/material/button'

/* Importamos MatSliderModule*/
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    /*Declaramos las importaciones */
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSortModule,
    MatButtonModule,
    MatSliderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
