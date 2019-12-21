import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyUsaComponent } from './study-usa.component';

describe('StudyUsaComponent', () => {
  let component: StudyUsaComponent;
  let fixture: ComponentFixture<StudyUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
