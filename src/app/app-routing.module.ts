import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavComponent } from "./nav/nav.component";
import { NewsDataComponent } from "./news-data/news-data.component";
import { HeaderComponent } from "./header/header.component";

const routes: Routes = [{ path: "nav", component: NavComponent }, { path: "data/:type", component: NewsDataComponent }, { path: "header/:type", component: HeaderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
