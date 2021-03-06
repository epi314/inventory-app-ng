import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { PRODUCT_SERVICE, RepositoryService, CURRENCY_SERVICE, NzdFixedCurrencyService} from '@app/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: PRODUCT_SERVICE, useValue: new RepositoryService() },
    { provide: CURRENCY_SERVICE, useValue: new NzdFixedCurrencyService() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
