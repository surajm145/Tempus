import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCanadaComponent } from './study-canada.component';

describe('StudyCanadaComponent', () => {
  let component: StudyCanadaComponent;
  let fixture: ComponentFixture<StudyCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
