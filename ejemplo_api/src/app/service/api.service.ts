import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  gestUser(id:number):Observable<any>{
    return this.http.get(this.apiURL+'/users/'+id, this.httpOptions).pipe(
      retry(1)
    );
  }

  
  getUsers():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }

  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }

  getPost(id:number):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(
      retry(3)
    );
  }

  createPost(post:Post):Observable<any>{
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions)
    .pipe(
      retry(3)
    );
  }

  updatePost(id:number,post: Post):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(retry(3));
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }
}
