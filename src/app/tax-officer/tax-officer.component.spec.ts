import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxOfficerComponent } from './tax-officer.component';

describe('TaxOfficerComponent', () => {
  let component: TaxOfficerComponent;
  let fixture: ComponentFixture<TaxOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
