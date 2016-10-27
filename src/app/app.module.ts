import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetFollowComponent } from './widget-follow/widget-follow.component';
import { HotelFilterPipe } from './hotel-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WidgetListComponent,
    WidgetWeatherComponent,
    WidgetFollowComponent,
    HotelFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export declare interface IHotel {
  _id: string,
  index: number,
  name: string,
  address: string,
  phone: string,
  pictures: string[],
  weather: {
    water: number,
    air: number
  },
  follow: {
    following: number,
    followers: number
  },
  tags: string[]
}
