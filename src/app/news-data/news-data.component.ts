import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewsDataService} from '../news-data.service';



@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: ['./news-data.component.css']
})
export class NewsDataComponent implements OnInit {

  public newsData: any = [];
  constructor(private http:HttpClient, private NewsDataService : NewsDataService ) {
    this.NewsDataService.init().subscribe((data) => {
      this.newsData = data;
      console.log(data);
    })

   }

  ngOnInit() {
 
    
     
  }

}




