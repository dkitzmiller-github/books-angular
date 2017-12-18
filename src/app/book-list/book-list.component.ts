import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book, IBook} from '../book/book';
import {SampleBookData} from '../../shared/data/bookdata';
import {CapitalizeIt} from '../book-shared/capitalizeIt.pipe';
import {BookFormComponent} from '../book-form/book-form.component';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: Array<IBook>;

    selectedBook: Book;

    @Output()
    editBookEmitter = new EventEmitter<Book>();

    constructor(private capitalizeIt: CapitalizeIt) {
    }

    ngOnInit() {
        this.books = SampleBookData;
        this.capitalizeStringValues();
    }

    public addNewBook($event) {
        console.log($event);
        this.books.push($event);
    }

    onSubmit($event) {
        console.log(`submit form: ${ JSON.stringify($event)}`);
    }

    onSelect(book: Book) {
        this.selectedBook = book === this.selectedBook ? undefined : book;
        console.log('onSelect');
    }

    onRemove(book: Book, event: Event) {
        console.log(`removing book: ${book.title}`);
        event.stopImmediatePropagation();

        if (this.selectedBook === book) {
            this.selectedBook = undefined;
        }
        this.books.splice(this.books.indexOf(book), 1);
    }

    onUpdate(book: Book) {
        console.log(`onUpdate: ${JSON.stringify(book)}`);
        if (book) {
            book.action = BookFormComponent.EDIT;
            this.editBookEmitter.emit(book);
        }
    }

    onTdClick(event: Event) {
        console.log(` onTdClick: ${JSON.stringify(event)}`);

    }

    public getBooks(): Array<Book> {
        return this.books;
    }

    private capitalizeStringValues() {
        this.books.forEach(bk => {
            bk.title = this.capitalizeIt.transform(bk.title, false);
            bk.author = this.capitalizeIt.transform(bk.author, ['jeffery']);
            bk.publisher = this.capitalizeIt.transform(bk.publisher, ['house']);
        });
    }

}
