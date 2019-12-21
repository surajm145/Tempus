import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAssistanceComponent } from './loan-assistance.component';

describe('LoanAssistanceComponent', () => {
  let component: LoanAssistanceComponent;
  let fixture: ComponentFixture<LoanAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
