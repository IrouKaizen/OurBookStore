import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUserDashboardComponent } from './simple-user-dashboard.component';

describe('SimpleUserDashboardComponent', () => {
  let component: SimpleUserDashboardComponent;
  let fixture: ComponentFixture<SimpleUserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleUserDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
