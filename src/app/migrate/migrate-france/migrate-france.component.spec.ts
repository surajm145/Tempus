import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateFranceComponent } from './migrate-france.component';

describe('MigrateFranceComponent', () => {
  let component: MigrateFranceComponent;
  let fixture: ComponentFixture<MigrateFranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateFranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
