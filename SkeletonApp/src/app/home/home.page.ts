import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {usuario: '', password: ''};
  nombre = "";
  apellido = "";
  nivel_educacional = "";
  fecha_nacimiento = "";
  location: any;
  alertButtons = ['Ok'];

  constructor(private activeroute: ActivatedRoute, private router:Router) {
    this.location = location;
    this.activeroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()!.extras.state){
        console.log(this.router.getCurrentNavigation()!.extras.state!['user']);
        this.user = this.router.getCurrentNavigation()!.extras.state!['user'];
      }
    });
  }

  limpiar(){
    //this.location.reload();
    this.nombre = "";
    this.apellido = "";
    this.nivel_educacional = "";
    this.fecha_nacimiento = "";
  }

}
