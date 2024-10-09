import { Component, OnInit } from '@angular/core';
import { Api2Service } from '../service/api2.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.page.html',
  styleUrls: ['./ejemplo.page.scss'],
})
export class EjemploPage implements OnInit {

  user!:User;
  users!:Array<User>;

  constructor(private api: Api2Service) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.api.getUsers().subscribe((data)=>{
      this.users=data.data;
    });
  }
  
}
