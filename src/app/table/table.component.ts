import { Component, OnInit } from '@angular/core';
import {PeoplesService} from '../services/peoples.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

peoples: Observable<any[]>
columns: string[];

  constructor(private atService: PeoplesService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.peoples = this.atService.getPeoples();
  }

}
