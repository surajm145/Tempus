import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreDepartureSupportComponent } from './pre-departure-support.component';

describe('PreDepartureSupportComponent', () => {
  let component: PreDepartureSupportComponent;
  let fixture: ComponentFixture<PreDepartureSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreDepartureSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDepartureSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
