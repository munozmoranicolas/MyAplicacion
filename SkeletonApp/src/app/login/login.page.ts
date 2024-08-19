import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public progress = 0;
  user = {usuario: '', password: ''};

  constructor(private router: Router) { 
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
  }

  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.router.navigate(['/home'],navigationExtras);
  }

}
