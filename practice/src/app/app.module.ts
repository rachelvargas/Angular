import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComonent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

import { HeaderComponent } from './header/header.component';
import { ScripturesComponent } from './scriptures/scriptures.component';
import { ScriptureListComponent } from './scriptures/scripture-list/scripture-list.component';
import { ScriptureMasteryComponent } from './scriptures/scripture-mastery/scripture-mastery.component';
import { ScriptureItemComponent } from './scriptures/scripture-item/scripture-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';
import { ScriptureDetailComponent } from './scriptures/scripture-detail/scripture-detail.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarningAlertComonent,
    SuccessAlertComponent,
    ScripturesComponent,
    ScriptureListComponent,
    ScriptureMasteryComponent,
    ScriptureItemComponent,
    BookListComponent,
    BookEditComponent,
    ScriptureDetailComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
