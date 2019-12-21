import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyIrelandComponent } from './study-ireland.component';

describe('StudyIrelandComponent', () => {
  let component: StudyIrelandComponent;
  let fixture: ComponentFixture<StudyIrelandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyIrelandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyIrelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
