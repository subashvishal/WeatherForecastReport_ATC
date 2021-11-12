import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  declarations: [AppComponent, DashBoardComponent, ForecastComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
