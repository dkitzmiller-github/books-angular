import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from '../book/book';

@Component({
  selector: 'book-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Title</div>
      <div class="col-xs-9  pull-left">{{ book.title }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3"> Author</div>
      <div class="col-xs-9 pull-left">{{ book.author }}</div>
    </div>
    <div class="row">
          <div class="col-xs-3"> Year</div>
          <div class="col-xs-9 pull-left">{{ book.year }}</div>
      </div>
    <div class="row">
      <div class="col-xs-3">Pages</div>
      <div class="col-xs-9 pull-left">{{ book.pages }}</div>
    </div>
      <div class="row">
          <div class="col-xs-3">Publisher</div>
          <div class="col-xs-9 pull-left">{{ book.publisher }}</div>
      </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
  </div>`
})
export class BookSubmittedComponent {
  @Input()  book: Book;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }
}
