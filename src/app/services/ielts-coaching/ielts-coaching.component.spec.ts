import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsCoachingComponent } from './ielts-coaching.component';

describe('IeltsCoachingComponent', () => {
  let component: IeltsCoachingComponent;
  let fixture: ComponentFixture<IeltsCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeltsCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeltsCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
