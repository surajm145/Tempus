import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateCanadaComponent } from './migrate-canada.component';

describe('MigrateCanadaComponent', () => {
  let component: MigrateCanadaComponent;
  let fixture: ComponentFixture<MigrateCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
