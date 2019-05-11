import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { ICurrency } from '../models/currency.model';

export interface ICurrencyService {
  getAll(): Observable<ICurrency[]>;
}

export const CURRENCY_SERVICE = new InjectionToken<ICurrencyService>('CURRENCY_SERVICE_TOKEN');
