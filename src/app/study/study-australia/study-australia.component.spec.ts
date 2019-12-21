import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAustraliaComponent } from './study-australia.component';

describe('StudyAustraliaComponent', () => {
  let component: StudyAustraliaComponent;
  let fixture: ComponentFixture<StudyAustraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyAustraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
