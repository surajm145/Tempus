import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySouthkoreaComponent } from './study-southkorea.component';

describe('StudySouthkoreaComponent', () => {
  let component: StudySouthkoreaComponent;
  let fixture: ComponentFixture<StudySouthkoreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudySouthkoreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySouthkoreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
