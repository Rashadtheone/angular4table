import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';


import {PeoplesService} from './services/peoples.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SerchFilterComponent } from './serch-filter/serch-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FooterComponent,
    HeaderComponent,
    PaginationComponent,
    SerchFilterComponent
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
