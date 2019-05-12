import { TestBed, async } from '@angular/core/testing';
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
} from './core';

import { AppComponent } from './app.component';
import { ProductListingComponent } from './shared/components/product-listing/product-listing.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductListingComponent
      ],
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render product listing component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-product-listing').length).toEqual(1);
  });
});
