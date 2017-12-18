import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {BookFormComponent} from './book-form.component';
import {BookSharedModule} from '../book-shared/book-shared.module';
import {BookSubmittedComponent} from '../book-shared/book-submitted.component';

@NgModule({
    imports: [CommonModule, BookSharedModule, ReactiveFormsModule],
    declarations: [BookFormComponent],
    exports: [CommonModule, BookFormComponent, BookSubmittedComponent]
})
export class BookFormModule {

}
