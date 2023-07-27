import { Component, OnInit } from '@angular/core';
 import { Scripture } from './scripture.model';

@Component({
  selector: 'app-scriptures',
  templateUrl: './scriptures.component.html',
  styleUrls: ['./scriptures.component.css']
})
export class ScripturesComponent implements OnInit {
  selectedScripture: Scripture;

  constructor(){ }

  ngOnInit() {

  }

}
