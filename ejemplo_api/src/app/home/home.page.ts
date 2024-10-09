import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user:any;
  users:any;
  posts:any;
  post:Post = {id:0,title:"",body:"", userId:0};
  compareWith:any;

  constructor(private api: ApiService) {}
  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();
  }

  getUsuario(id:number){
    this.api.gestUser(id).subscribe((data:any)=>{
      console.log(data)
      this.user=data;
    });
  }
  getUsuarios(){
    this.api.getUsers().subscribe((data)=>{
      this.users=data;
    });
  }
  getPosts(){
    this.api.getPosts().subscribe((data)=>{
      this.posts=data;
      this.posts.reverse();
    });
  }
  guardarPost(){
    if(this.post.userId==null){
      if(this.user==undefined){
        console.log("Seleccione un usuario");
        return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        ()=>{
          console.log("Creado Correctamente");
          this.getPosts();
        },
        error=>{
          console.log("Error "+error)
        }
      );
    }
    else{
      this.api.updatePost(this.post.id,this.post).subscribe(
        ()=>{
          console.log("Actualzado Correctamente");
          this.getPosts();
        },
        error=>{
          console.log("Error "+error)
        }
      );
    }
  }

  setPost(_post:Post){
    this.post=_post;
    this.getUsuario(_post.id);
    this.compareWith = this.compareWithFn;
  }

  eleminarPost(_post:Post){
    console.log("eeliminar")
    this.api.deletePost(_post.id).subscribe(
      success=>{
        console.log("Eliminado correctamente");
        this.getPosts();
      },
      error=>{
        console.log("Error "+error)
      }
    )
  }

  compareWithFn = (o1:Post, o2:Post) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

}
