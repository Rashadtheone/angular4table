import { Component, OnInit } from '@angular/core';
import {PeoplesService} from '../services/peoples.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  public peoples: Observable<any[]>
  // public filterPeoples: Observable<any[]>
  public filter: string;
  public query: string;
  public columns: string[];

  startIndex = 0;
  page = 1;
  pages: number;
  limit: number;
  resultsLimits = [
    10,
    20,
    50
  ];

  constructor(private atService: PeoplesService) { }

  ngOnInit() {
    this.limit = this.resultsLimits[0];
    this.columns = this.atService.getColumns();
    this.peoples = this.atService.getPeoples(null, null, this.startIndex, this.limit);
    this.atService.getPeoples().subscribe(list => {
      this.pages = list.length / this.limit;
      console.log(list);
    });
  }

  onFilterChange(event) {
    this.filter = event.target.value;
    this.query = '';
    this.peoples = this.atService.getPeoples();
  }

  updateFilterResults() {
    console.log(this.query);
    this.peoples = this.atService.getPeoples(this.filter, this.query, null, this.limit);
  }

  onLimitChanged(newLimit) {
    this.limit = +newLimit;
    this.startIndex = 0;
    this.page = 1;
    this.peoples = this.atService.getPeoples(this.filter, this.query, this.startIndex, (this.startIndex + this.limit));
    this.atService.getPeoples().subscribe(list => {
      this.pages = list.length / this.limit;
    });
  }

  onPage(pageNumber: number): void {
    this.page = pageNumber;
    this.startIndex = (pageNumber * this.limit) - this.limit;
    this.peoples = this.atService.getPeoples(this.filter, this.query, this.startIndex, (this.startIndex + this.limit));
  }

  onPrev(): void {
    if(this.page === 1) { return; }
    this.page = this.page - 1;
    this.startIndex = this.startIndex - this.limit;
    this.peoples = this.atService.getPeoples(this.filter, this.query, this.startIndex, (this.startIndex + this.limit));
    // this.atService.getPeoples(this.filter, this.query, this.startIndex, (this.startIndex - this.limit))
    // .subscribe(list => {
    //   console.log(this, list);
    // })
  }
  onNext(next: boolean): void {
    if(this.page === this.pages) { return; }
    this.page = this.page + 1;
    this.startIndex = this.startIndex + this.limit;
    this.peoples = this.atService.getPeoples(this.filter, this.query, this.startIndex, (this.startIndex + this.limit));
    // this.atService.getPeoples(this.filter, this.query, this.startIndex, (this.startIndex + this.limit))
    // .subscribe(list => {
    //   console.log(this, list);
    // })
  }

  onSubmitStatus(people) {
    this.atService.submitPostRequest(people.id, people.status)
    .then(resp => {
      console.log(resp);
      people.status = 'Read';
      alert('Successful!');
    })
  }

}
