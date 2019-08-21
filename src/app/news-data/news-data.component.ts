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
  public searchQuery : string;
  public newsData: any = [];
  public type: string;
  constructor(private http: HttpClient, private NewsDataService: NewsDataService, private route: ActivatedRoute) {
    
    this.route.paramMap.subscribe(params => {
      this.type = params.get("type");
      console.log("18 Type is " + this.type);
      if(this.type == null)
      {
        this.type = "Business";
      }
     
     
      console.log("25 Type is " + this.type);
      this.NewsDataService.getData(this.type).subscribe(data => {
        console.log(data);
        this.newsData = data;
     
      });
    });

    
  }

  ngOnInit() {
   
  }

  updateData() {
    this.NewsDataService.getData(this.searchQuery).subscribe(data => {
      this.newsData = data;
   
    });
  }





}
