import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateUkComponent } from './migrate-uk.component';

describe('MigrateUkComponent', () => {
  let component: MigrateUkComponent;
  let fixture: ComponentFixture<MigrateUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
