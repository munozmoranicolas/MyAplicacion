import { Component, inject, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Storage } from '@ionic/storage-angular';
import { DBTaskService } from '../servicios/dbtask.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public progress = 0;
  user = {usuario: 'Nicolas', password: '1234'};

  constructor(private router: Router, private authenticationService: AuthenticationService, private storage: Storage, private dbtask: DBTaskService) { 
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  ngOnInit() {
    console.log('ngOnInit LoginPage');
    this.storage.create();
    this.dbtask.initializeDatabase('user');
    this.dbtask.addUser('Nicolas');
    //console.log(this.dbtask.fetchUsers());
  }

  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.storage.set('user', this.user);
    this.router.navigate(['/home'],navigationExtras);
  }

  validarLogin(){
    if(this.user.usuario.length >= 3 && this.user.usuario.length <= 8 && this.user.password.length == 4 && this.user.password.match(/^\d{4}$/)){
      this.authenticationService.login_user(this.user.usuario, this.user.password);
      this.ingresar();  
    }
    else{
      alert("Usuario y/o contraseña incorrectos");
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy LoginPage');
  }

}
