import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPolandComponent } from './study-poland.component';

describe('StudyPolandComponent', () => {
  let component: StudyPolandComponent;
  let fixture: ComponentFixture<StudyPolandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyPolandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyPolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
