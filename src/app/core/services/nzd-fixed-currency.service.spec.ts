import { TestBed } from '@angular/core/testing';

import { NzdFixedCurrencyService } from './nzd-fixed-currency.service';

describe('NzdFixedCurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NzdFixedCurrencyService = TestBed.get(NzdFixedCurrencyService);
    expect(service).toBeTruthy();
  });
});
