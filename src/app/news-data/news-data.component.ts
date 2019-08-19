import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NewsDataService } from "../news-data.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-news-data",
  templateUrl: "./news-data.component.html",
  styleUrls: ["./news-data.component.css"]
})
export class NewsDataComponent implements OnInit {
  public newsData: any = [];
  public type: any;
  constructor(private http: HttpClient, private NewsDataService: NewsDataService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
    
      this.type = params.get("type");
      console.log("From Component: Type is " + this.type);
      this.NewsDataService.getData(this.type).subscribe(data => {
        this.newsData = data;
     
      });
    });

    
  }

  ngOnInit() {
   
  }



}
