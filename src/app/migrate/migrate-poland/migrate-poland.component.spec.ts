import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigratePolandComponent } from './migrate-poland.component';

describe('MigratePolandComponent', () => {
  let component: MigratePolandComponent;
  let fixture: ComponentFixture<MigratePolandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigratePolandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigratePolandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
