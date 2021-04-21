import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service'
@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksDisplayComponent implements OnInit {
  public books = [];
  
  constructor(private _bookService:BookserviceService) { }

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data}

    )
  }

}
