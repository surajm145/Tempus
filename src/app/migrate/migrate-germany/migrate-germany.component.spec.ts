import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateGermanyComponent } from './migrate-germany.component';

describe('MigrateGermanyComponent', () => {
  let component: MigrateGermanyComponent;
  let fixture: ComponentFixture<MigrateGermanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateGermanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateGermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
