import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICurrency } from '../models/currency.model';
import { ICurrencyService } from './currency.service';

const EXCHANGE_RATE_DATA: ICurrency[] = [
  { name: 'New Zealand Dollar', symbol: 'NZD', rate: 1.00 },
  { name: 'U.S. Dollar', symbol: 'USD', rate: 0.76 },
  { name: 'Euro', symbol: 'EUR', rate: 0.67 }
];

@Injectable({
  providedIn: 'root'
})
export class NzdFixedCurrencyService implements ICurrencyService{

  constructor() { }

  getAll(): Observable<ICurrency[]> {
    return of(EXCHANGE_RATE_DATA);
  }
}
