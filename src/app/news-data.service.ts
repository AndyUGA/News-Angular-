import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NewsDataService {

  public test: any;
  constructor(private http:HttpClient) {

    
   }

   init() {
    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e";
     return this.http.get(apiURL);
   }


}
