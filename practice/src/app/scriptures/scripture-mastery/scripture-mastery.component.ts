import { Component, OnInit, Input } from '@angular/core';
import { Scripture } from '../scripture.model';

@Component({
  selector: 'app-scripture-mastery',
  templateUrl: './scripture-mastery.component.html',
  styleUrls: ['./scripture-mastery.component.css']
})
export class ScriptureMasteryComponent implements OnInit {
 @Input() scripture: Scripture;

  constructor(){

  }

  ngOnInit(){

  }

}
