import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterBillOfficerComponent } from './water-bill-officer.component';

describe('WaterBillOfficerComponent', () => {
  let component: WaterBillOfficerComponent;
  let fixture: ComponentFixture<WaterBillOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterBillOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterBillOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
