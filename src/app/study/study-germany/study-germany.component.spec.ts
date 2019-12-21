import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyGermanyComponent } from './study-germany.component';

describe('StudyGermanyComponent', () => {
  let component: StudyGermanyComponent;
  let fixture: ComponentFixture<StudyGermanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyGermanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyGermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
