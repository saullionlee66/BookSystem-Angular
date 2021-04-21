import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import {IBook} from '../books'
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private getUrl:string = 'http://localhost:5000/'
  constructor(private http: HttpClient) { }

  getBooks():Observable<IBook[]>{
    return this.http.get<IBook[]>(this.getUrl);
  }

  
}
