import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { MatSort, MatTableDataSource } from '@angular/material';
import { PRODUCT_SERVICE, IProductService, IProduct } from '@app/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  selectedCurrencyIndex = 0;

  displayedColumns: string[] = ['name', 'price', 'type'];
  productDataSource: MatTableDataSource<IProduct>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: IProductService,
  ) { }

  ngOnInit() {
    this.productService.getAll()
      .pipe(take(1))
      .subscribe(products => {
        this.productDataSource = new MatTableDataSource([...products]);
        this.productDataSource.sort = this.sort;
      });
  }
}
