import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateNewzealandComponent } from './migrate-newzealand.component';

describe('MigrateNewzealandComponent', () => {
  let component: MigrateNewzealandComponent;
  let fixture: ComponentFixture<MigrateNewzealandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateNewzealandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateNewzealandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
