import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateAustraliaComponent } from './migrate-australia.component';

describe('MigrateAustraliaComponent', () => {
  let component: MigrateAustraliaComponent;
  let fixture: ComponentFixture<MigrateAustraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateAustraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
