import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatTableModule, MatSortModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule { }
