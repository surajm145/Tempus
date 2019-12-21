import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementAssistanceComponent } from './settlement-assistance.component';

describe('SettlementAssistanceComponent', () => {
  let component: SettlementAssistanceComponent;
  let fixture: ComponentFixture<SettlementAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
