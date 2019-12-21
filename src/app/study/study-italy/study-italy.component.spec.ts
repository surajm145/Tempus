import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyItalyComponent } from './study-italy.component';

describe('StudyItalyComponent', () => {
  let component: StudyItalyComponent;
  let fixture: ComponentFixture<StudyItalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyItalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
