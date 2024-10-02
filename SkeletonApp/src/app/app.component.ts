import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLiteService } from './servicios/sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isWeb :  boolean = false;
  private initPlugin : boolean = false;

  constructor( private platform : Platform, private sqlite : SQLiteService) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.sqlite.initializePlugin().then(async ( retorno ) => {
        this.initPlugin = retorno;
        if ( this.sqlite.platform === "web" ) {
          this.isWeb = true;
          await customElements.whenDefined('jeep-sqlite');
          const jeepSqliteEl = document.querySelector('jeep-sqlite');
          if(jeepSqliteEl != null) {
            await this.sqlite.initWebStore();
            console.log('>>>> isStoreOpen: ', await jeepSqliteEl.isStoreOpen());  
          }
          else{
            console.log('>>>> jeepSqliteEl is null');
          }
        }
        console.log('>>>> in App this.initPlugin  ', this.initPlugin);
      }).catch((error) => { console.log("Error al inicializar el plugin: ", error)});
    });
  }
}
