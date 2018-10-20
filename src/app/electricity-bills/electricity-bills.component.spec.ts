import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityBillsComponent } from './electricity-bills.component';

describe('ElectricityBillsComponent', () => {
  let component: ElectricityBillsComponent;
  let fixture: ComponentFixture<ElectricityBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
