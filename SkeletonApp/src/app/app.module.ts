import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule,MAT_DATE_LOCALE } from '@angular/material/core';

import { IonicStorageModule } from '@ionic/storage-angular';

import { SQLiteService } from './servicios/sqlite.service';
import { DBTaskService } from './servicios/dbtask.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync(),{provide: MAT_DATE_LOCALE, useValue: 'fr'},SQLiteService,DBTaskService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
