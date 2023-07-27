import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() bookAdded = new EventEmitter<Book>();


  constructor(){ }

  ngOnInit() {

  }
  
  onAddItem(){
    const booName = this.nameInputRef.nativeElement.value;
    const booAmount = this.amountInputRef.nativeElement.value;
    //const newBook = new Book(this.nameInputRef.nativeElement.value);
    const newBook = new Book(booName, booAmount);
    this.bookAdded.emit(newBook);



}


}
