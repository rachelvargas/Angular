import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books: Book[] = [
    new Book('Book of Mormon', 3)
    //new Book('Bible', 2),
    //new Book('Doctrine and Covenants', 2)
  ];

  constructor(){}

  ngOnInit(){

  }

  onBookAdded(book: Book ) {
    this.books.push(book);
  }

}

