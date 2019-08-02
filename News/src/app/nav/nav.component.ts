import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  NavText = "This is the nav bar";
  test : any;
  constructor(private http:HttpClient) {


   }

  ngOnInit() {
    let apiURL = "https://jsonplaceholder.typicode.com/todos/1";
  
    /*
      let data2 = this.http
      this.http.get(apiURL)
      .subscribe(data => this.test = data);
    */

    let testData = this.http.get(apiURL).subscribe(result => this.test = result);

     
  }

}
