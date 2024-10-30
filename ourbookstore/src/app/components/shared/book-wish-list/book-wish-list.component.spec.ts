import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWishListComponent } from './book-wish-list.component';

describe('BookWishListComponent', () => {
  let component: BookWishListComponent;
  let fixture: ComponentFixture<BookWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookWishListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
