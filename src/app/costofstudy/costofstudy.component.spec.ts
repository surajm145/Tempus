import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostofstudyComponent } from './costofstudy.component';

describe('CostofstudyComponent', () => {
  let component: CostofstudyComponent;
  let fixture: ComponentFixture<CostofstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostofstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostofstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
