import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignExchangeRatesComponent } from './foreign-exchange-rates.component';

describe('ForeignExchangeRatesComponent', () => {
  let component: ForeignExchangeRatesComponent;
  let fixture: ComponentFixture<ForeignExchangeRatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeignExchangeRatesComponent]
    });
    fixture = TestBed.createComponent(ForeignExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
