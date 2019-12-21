import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyUkComponent } from './study-uk.component';

describe('StudyUkComponent', () => {
  let component: StudyUkComponent;
  let fixture: ComponentFixture<StudyUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
