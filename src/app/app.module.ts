import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookFormModule} from './book-form/book-form.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookSharedModule} from './book-shared/book-shared.module';
import {CapitalizeIt} from './book-shared/capitalizeIt.pipe';
import { BookSelectedComponent } from './book-selected/book-selected.component';
import {BookComponent} from './book/book.component';

@NgModule({
    imports: [
        BrowserModule,
        BookFormModule,
        BookSharedModule
    ],
    declarations: [ AppComponent, BookListComponent, BookComponent, BookSelectedComponent],
    providers: [CapitalizeIt],
    bootstrap: [AppComponent]
})
export class AppModule {
}
