import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Scripture } from '../scripture.model';

@Component({
  selector: 'app-scripture-item',
  templateUrl: './scripture-item.component.html',
  styleUrls: ['./scripture-item.component.css']
})
export class ScriptureItemComponent {
  @Input() scripture: Scripture;
  @Output() scriptureSelected = new EventEmitter<void>()

  constructor(){ }

  ngOnInit() {

  }

  onSelected(){
    this.scriptureSelected.emit();

  }

}
