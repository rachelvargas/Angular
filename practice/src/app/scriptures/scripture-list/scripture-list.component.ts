import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Scripture } from '../scripture.model';

@Component({
  selector: 'app-scripture-list',
  templateUrl: './scripture-list.component.html',
  styleUrls: ['./scripture-list.component.css']
})
export class ScriptureListComponent implements OnInit{
  @Output() scriptureWasSelected = new EventEmitter<Scripture>();


  scriptures: Scripture[] = [
    new Scripture('A Test Scripture', 'This is a simply test', 
    'https://cdn.pixabay.com/photo/2016/03/31/18/27/book-1294379_960_720.png'),
    new Scripture('Another Test Scripture', 'This is a simply test', 
    'https://cdn.pixabay.com/photo/2016/03/31/18/27/book-1294379_960_720.png')
  ];

  constructor(){

  }

  ngOnInit(){

  }
  onScriptureSelected(scripture: Scripture){
    this.scriptureWasSelected.emit(scripture);

  }

}
