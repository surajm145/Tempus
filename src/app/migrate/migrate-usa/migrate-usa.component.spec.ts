import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateUsaComponent } from './migrate-usa.component';

describe('MigrateUsaComponent', () => {
  let component: MigrateUsaComponent;
  let fixture: ComponentFixture<MigrateUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
