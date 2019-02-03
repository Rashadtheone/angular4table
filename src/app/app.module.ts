import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';

import {PeoplesService} from './services/peoples.service';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    FooterComponent
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
