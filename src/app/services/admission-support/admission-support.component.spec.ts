import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionSupportComponent } from './admission-support.component';

describe('AdmissionSupportComponent', () => {
  let component: AdmissionSupportComponent;
  let fixture: ComponentFixture<AdmissionSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
