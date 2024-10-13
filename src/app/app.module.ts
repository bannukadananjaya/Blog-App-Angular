import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
// import { HomeComponent } from "./pages/home/home.component";
// import { AboutUsComponent } from "./pages/about-us/about-us.component";

@NgModule({
  declarations:[  
      
  ],
  imports:[
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers:[],
  bootstrap:[]
})

export class AppModule{}
