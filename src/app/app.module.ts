import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './views/navigation-bar/navigation-bar.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonServiceService } from './common-service.service';
import { TopStoriesComponent } from './top-stories/top-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeCardComponent,
    TopStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
