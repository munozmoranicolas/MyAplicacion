import { Component } from '@angular/core';
import { SqliteService } from '../servicios/sqlite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public usuario : string;
  public usuarios : string[];

  constructor(private sqlite : SqliteService) {
    this.usuario = "";
    this.usuarios = [];
  }

  create(){

  }

  read(){
    
  }

  update(usuario : string){

  }

  delete(usuario : string){

  }

}
