import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProduct } from '../models/product.model';
import { IProductService } from './product.service';

declare class LawnmowerRepository {
  getAll(): any[];
}

declare class PhoneCaseRepository {
  getAll(): any[];
}

declare class TShirtRepository {
  getAll(): any[];
}

interface IProductDatasource {
  type: string;
  getAll(): any[];
}

class LawnmowerDatasource extends LawnmowerRepository implements IProductDatasource {
  type = 'Lawnmower';
}

class PhoneCaseDatasource extends PhoneCaseRepository implements IProductDatasource {
  type = 'Phone Case';
}

class TShirtDatasource extends TShirtRepository implements IProductDatasource {
  type = 'T-Shirt';
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService implements IProductService {
  datasource: IProductDatasource[] = [
    new LawnmowerDatasource(),
    new PhoneCaseDatasource(),
    new TShirtDatasource()
  ];

  constructor() { }

  getAll(): Observable<IProduct[]> {
    let consolidated: IProduct[] = [];
    let id = 0;
    this.datasource.forEach(source => {
      const products: IProduct[] = source.getAll();
      consolidated = [
        ...consolidated,
        ...products.map(product => ({
          // Product IDs are not unique across product types. Remap for uniqueness.
          id: ++id,
          type: source.type,
          name: product.name,
          price: product.price
        }))
      ];
    });

    return of(consolidated);
  }
}
