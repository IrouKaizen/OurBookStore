import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTopbarComponent } from './lib-topbar.component';

describe('LibTopbarComponent', () => {
  let component: LibTopbarComponent;
  let fixture: ComponentFixture<LibTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
