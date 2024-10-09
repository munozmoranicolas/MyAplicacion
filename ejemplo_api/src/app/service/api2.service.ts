import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api2Service {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

  apiURL = 'https://reqres.in/api';

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
  
}
