import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ApplicationCreateComponent} from './components/application-create/application-create.component';
import {ApplicationDetailsComponent} from './components/application-details/application-details.component';
import {ApplicationListComponent} from './components/application-list/application-list.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationCreateComponent,
    ApplicationDetailsComponent,
    ApplicationListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
