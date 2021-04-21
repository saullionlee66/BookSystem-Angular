import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private http:HttpClient) { }
  private postUrl = 'http://localhost:5000/data'
  onSubmit(data){
    this.http.post(this.postUrl,data,{responseType: 'text'}).subscribe(
      (result)=>{
        console.log(result)
      }
    );
    
  }
  ngOnInit(): void {
  }

}
