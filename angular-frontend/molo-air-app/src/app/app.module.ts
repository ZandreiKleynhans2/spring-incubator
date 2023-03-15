import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './dashboard/home-screen/home-screen.component';
import { HomeNavComponent } from './dashboard/home-nav/home-nav.component';
import { FlightScreenComponent } from './flights/flight-screen/flight-screen.component';
import { BookingScreenComponent } from './bookings/booking-screen/booking-screen.component';
import { CustomerScreenComponent } from './customer/customer-screen/customer-screen.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { BookingCreateComponent } from './bookings/booking-create/booking-create.component';
import { FlightCreateComponent } from './flights/flight-create/flight-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HomeNavComponent,
    FlightScreenComponent,
    BookingScreenComponent,
    CustomerScreenComponent,
    CustomerCreateComponent,
    BookingCreateComponent,
    FlightCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
