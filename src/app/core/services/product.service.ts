import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { IProduct } from '../models/product.model';

export interface IProductService {
  getAll(): Observable<IProduct[]>;
}

export const PRODUCT_SERVICE = new InjectionToken<IProductService>('PRODUCT_SERVICE_TOKEN');
