import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NewsDataComponent } from "./news-data/news-data.component";
import { NewsDataService } from "./news-data.service";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [AppComponent, NavComponent, HeaderComponent, NewsDataComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [NewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
