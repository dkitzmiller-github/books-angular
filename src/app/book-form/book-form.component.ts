import {Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Book} from '../book/book';

@Component({
    selector: 'book-form',
    templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {

    static readonly EDIT = 'EDIT';
    static readonly ADD = 'ADD';

    legend = 'Book Add';

    @Input()
    book: Book;

    submitted = false;

    @Output()
    newBookEmitter = new EventEmitter<Book>();

    // Reset the form with a new book AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    bookForm: FormGroup;

    formErrors = {
        'title': '',
        'author': '',
        'publisher': '',
        'pages': '',
        'year': ''
    };

    validationMessages = {
        'title': {
            'required': () => 'Title is required.',
            'minlength': (control) => `Title must be at least ${control.errors.minlength.requiredLength} characters long.`,
            'maxlength': (control) => `Title cannot be more than ${control.errors.maxlength.requiredLength} characters long.`
        },
        'author': {
            'required': () => 'Author is required.',
            'minlength': (control) => `Author must be at least ${control.errors.minlength.requiredLength} long.`,
            'maxlength': (control) => `Author cannot be more than ${control.errors.maxlength.requiredLength} characters long.`
        },
        'publisher': {
            'required': () => 'Publisher is required.',
            'minlength': (control) => `Publisher must be at least ${control.errors.minlength.requiredLength} characters long.`,
            'maxlength': (control) => `Publisher cannot be more than ${control.errors.maxlength.requiredLength} characters long.`
        },
        'pages': {
            'required': () => 'Pages is required.',
            'min': (control) => `Pages - a book has to have atleast ${control.errors.min.min}.`,
            'max': (control) => `Pages - must have a reasonable number.`
        },
        'year': {
            'required': 'Year is required.',
            'min': (control) => `Year - published year must be after ${control.errors.min.min}`,
            'max': (control) => `Pages - published year greater than ${control.errors.max.max} year.`
        }
    };

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    resetForm(): void {
        this.book = new Book();
        this.buildForm();
    }

    editBook(book: Book): void {
        console.log('book-form: editBook');
        book.action = BookFormComponent.EDIT;
        this.book = book;
        this.submitted = false;
        this.legend = 'Book Edit';
        this.buildForm();
    }

    onSubmit() {
        this.submitted = true;
        this.book = this.bookForm.value;
        this.newBookEmitter.emit(this.bookForm.value);
    }

    buildForm(): void {
        this.bookForm = this.fb.group({
            'title': [this.book.title, [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(24)
            ]],
            'author': [this.book.author, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20)
            ]],
            'publisher': [this.book.publisher, [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(20)
            ]],
            'pages': [this.book.pages, [
                Validators.required,
                Validators.min(1),
                Validators.max(9999)]],
            'year': [this.book.year, [
                Validators.required,
                Validators.min(1000),
                Validators.max(3000)
            ]]
        });

        // Emits data when a form recognizes the model has changed
        // data represents the whole form data values
        this.bookForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }

    // This observer doesn't care about the data, only the validations
    onValueChanged(data?: any) {
        if (!this.bookForm) {
            return;
        }
        const form = this.bookForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            if (this.formErrors.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                const control = form.get(field);

                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key](control);
                        }
                    }
                }
            }
        }
    }
}
