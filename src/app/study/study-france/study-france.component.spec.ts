import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyFranceComponent } from './study-france.component';

describe('StudyFranceComponent', () => {
  let component: StudyFranceComponent;
  let fixture: ComponentFixture<StudyFranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyFranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
