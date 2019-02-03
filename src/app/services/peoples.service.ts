import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/delay'

import { PEOPLES } from "./sample_data"

@Injectable()
export class PeoplesService {

  constructor() { }

  getPeoples(): Observable<any[]> {
    return Observable.of(PEOPLES).delay(100)
    
  }
  getColumns(): string [] {
    return ["name", "phone","email", "email", "data_entry", 
            "org_num", "address_1", "city", "zip", "2353", "geo",
            "pan", "pin", "status","fee", "guid","data_exit", "data_first", 
            "data_recent", "url"]
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