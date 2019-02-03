import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';

import {PeoplesService} from './services/peoples.service'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PeoplesService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
