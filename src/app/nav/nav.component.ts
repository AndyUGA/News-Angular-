import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public test: any = [];
  constructor(private http:HttpClient) {


   }

  ngOnInit() {
    let apiURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0c69f9ba9a494e84a33b2749dab3fc5e";
   

    let testData = this.http.get(apiURL).subscribe(result => this.test = result);
    
     
  }

}
