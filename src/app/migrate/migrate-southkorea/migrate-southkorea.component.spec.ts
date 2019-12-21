import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateSouthkoreaComponent } from './migrate-southkorea.component';

describe('MigrateSouthkoreaComponent', () => {
  let component: MigrateSouthkoreaComponent;
  let fixture: ComponentFixture<MigrateSouthkoreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrateSouthkoreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrateSouthkoreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
