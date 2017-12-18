import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book/book';

@Component({
    selector: 'book-selected',
    templateUrl: './book-selected.component.html',
    styleUrls: ['./book-selected.component.css']
})
export class BookSelectedComponent implements OnInit {

    @Input()
    book: Book;

    constructor() {
    }

    ngOnInit() {
    }

}
