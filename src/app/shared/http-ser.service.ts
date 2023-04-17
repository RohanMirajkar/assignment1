import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSerService {
  apiUrl : string = 'https://jsonplaceholder.typicode.com/todos';
  constructor( private http : HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response.map((item: any) => ({ ...item })))
    )
  }

}
