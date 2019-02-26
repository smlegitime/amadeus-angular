import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayeesModule } from './payees/payees.module';
import { BankingCommonModule } from './common/banking-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PayeesModule,
    BankingCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
