import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { ProductListingComponent } from './components/product-listing/product-listing.component';

@NgModule({
  declarations: [ProductListingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,

    ProductListingComponent
  ]
})
export class SharedModule { }
