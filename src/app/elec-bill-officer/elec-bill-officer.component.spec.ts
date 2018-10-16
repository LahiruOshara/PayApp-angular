import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecBillOfficerComponent } from './elec-bill-officer.component';

describe('ElecBillOfficerComponent', () => {
  let component: ElecBillOfficerComponent;
  let fixture: ComponentFixture<ElecBillOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecBillOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecBillOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
