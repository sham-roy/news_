import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsapiservicesService } from './servisec/newsapiservices.service';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';



@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
