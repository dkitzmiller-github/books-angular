import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { BookSubmittedComponent }          from './book-submitted.component';
import {CapitalizeIt} from './capitalizeIt.pipe';

@NgModule({
  imports:      [ CommonModule],
  declarations: [ BookSubmittedComponent, CapitalizeIt],
  exports:      [ BookSubmittedComponent, CapitalizeIt, CommonModule ]
})
export class BookSharedModule { }
