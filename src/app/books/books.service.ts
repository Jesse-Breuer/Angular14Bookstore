import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return  [{
      name:'Clean Code',
      author:'Robert C. Martin',
      src:'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 20
    },
    {
      name:'Pragmatic Programmer',
      author:'David Thomas',
      src:'https://m.media-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg',
      amount: 30
    },
    {
      name:'Pro Angular: Build Powerful and Dynamic Web Apps',
      author:'Adam Freeman',
      src:'https://m.media-amazon.com/images/I/41r7+TqeYsL._SX348_BO1,204,203,200_.jpg',
      amount: 30
    },
    {
      name:'Maintainable JavaScript: Writing Readable Code',
      author:'Nicholas Zakas',
      src:'https://m.media-amazon.com/images/I/51cTF3u7+XL._SX379_BO1,204,203,200_.jpg',
      amount: 35
    }];
  }
}
