import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatTableModule, MatSortModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
  ]
})
export class MaterialModule { }
