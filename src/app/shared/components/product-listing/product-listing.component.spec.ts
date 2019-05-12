import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  PRODUCT_SERVICE,
  RepositoryService,
  CURRENCY_SERVICE,
  NzdFixedCurrencyService
} from '../../../core';

import { ProductListingComponent } from './product-listing.component';

describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListingComponent ],
      imports: [
        MatButtonModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: PRODUCT_SERVICE, useValue: new RepositoryService() },
        { provide: CURRENCY_SERVICE, useValue: new NzdFixedCurrencyService() }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
