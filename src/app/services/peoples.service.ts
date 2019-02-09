import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'

import { PEOPLES } from "./sample_data"

@Injectable()
export class PeoplesService {
  constructor() { }

  getPeoples(
    filter?: string, 
    query?: string,
    start: number = 0,
    stop?: number
    ): Observable<any[]> {
    let list = query ? 
    PEOPLES.filter(p => p[(filter || 'name')].toLowerCase().includes(query.toLowerCase())) :
    PEOPLES;
    return stop ? 
    Observable.of(list.slice(start, stop)).delay(100) :
    Observable.of(list.slice(start)).delay(100);
  }
  getColumns(): string [] {
    return ["name", "phone", "email", 
            "org_num", "address_1", "city", "zip", "geo",
            "pan", "pin", "status","fee", "guid","date_entry",
            "date_exit", "date_first", 
            "date_recent", "url", "status", "id"]
  }

  submitPostRequest(id, status): Promise<{ success: boolean }> {
    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, status })
    };

    // fetch('/api/submit', options).then().then();

    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve({ success: true }); }, 1500);
    });
  }

}
//sample data
// "name": "Nell D. Michael",
// 		"phone": "602-1033",
// 		"email": "hendrerit.id.ante@placeratvelit.ca",
// 		"company": "Praesent Eu LLP",
// 		"date_entry": "2017-07-30 23:27:39",
// 		"org_num": "907369 2973",
// 		"address_1": "P.O. Box 916, 8584 Vestibulum St.",
// 		"city": "Vitry-sur-Seine",
// 		"zip": "2353",
// 		"geo": "60.77971, 7.98874",
// 		"pan": "4532992507580",
// 		"pin": "7086",
// 		"id": 1,
// 		"status": "read",
// 		"fee": "$60.99",
// 		"guid": "48653E36-987F-48EC-7382-7F009FF34628",
// 		"date_exit": "2018-11-14 12:37:54",
// 		"date_first": "2018-05-20 01:07:05",
// 		"date_recent": "2019-04-06 23:28:25",
// 		"url": "https://capco.com/"