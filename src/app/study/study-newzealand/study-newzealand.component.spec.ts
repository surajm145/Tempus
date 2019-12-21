import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyNewzealandComponent } from './study-newzealand.component';

describe('StudyNewzealandComponent', () => {
  let component: StudyNewzealandComponent;
  let fixture: ComponentFixture<StudyNewzealandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyNewzealandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyNewzealandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
