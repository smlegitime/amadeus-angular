import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeDetailComponent } from './payee-detail.component';

describe('PayeeDetailComponent', () => {
  let component: PayeeDetailComponent;
  let fixture: ComponentFixture<PayeeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
