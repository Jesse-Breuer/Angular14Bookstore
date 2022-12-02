import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import {BooksService} from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) { 
  }

  books:Book[] = [];

  // cart: Book[] = [];

  isShowing: boolean = true;

  // addToCart(book: Book){
  //   console.log(book);
  // }

  

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

}
