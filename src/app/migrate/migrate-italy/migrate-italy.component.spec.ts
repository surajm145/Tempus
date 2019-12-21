import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateItalyComponent } from './migrate-italy.component';

describe('MigrateItalyComponent', () => {
  let component: MigrateItalyComponent;
  let fixture: ComponentFixture<MigrateItalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateItalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
