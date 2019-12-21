import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateIrelandComponent } from './migrate-ireland.component';

describe('MigrateIrelandComponent', () => {
  let component: MigrateIrelandComponent;
  let fixture: ComponentFixture<MigrateIrelandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateIrelandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateIrelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
