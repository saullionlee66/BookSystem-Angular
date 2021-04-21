import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksDisplayComponent } from './books-display/books-display.component';
import { BookserviceService } from './bookservice.service';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
