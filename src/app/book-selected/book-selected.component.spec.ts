import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectedComponent } from './book-selected.component';

describe('BookSelectedComponent', () => {
  let component: BookSelectedComponent;
  let fixture: ComponentFixture<BookSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
