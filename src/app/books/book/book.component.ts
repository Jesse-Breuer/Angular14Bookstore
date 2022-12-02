import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();
   

  constructor(private cartService: CartService) { }
 

  ngOnInit(): void {
  }

  isInCart:boolean = false;

  addToCart(){
    // this.bookEmitter.emit(this.book);
    this.cartService.add(this.book);
    this.isInCart = true;
  }

  removeFromCart(){
    // this.bookEmitter.emit(this.book);
    this.cartService.remove(this.book);
    this.isInCart = false;
  }

}
