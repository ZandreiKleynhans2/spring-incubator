import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './dashboard/home-screen/home-screen.component';
import { FlightScreenComponent } from './flights/flight-screen/flight-screen.component';
import { BookingScreenComponent } from './bookings/booking-screen/booking-screen.component';
import { CustomerScreenComponent } from './customer/customer-screen/customer-screen.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { BookingCreateComponent } from './bookings/booking-create/booking-create.component';
import { FlightCreateComponent } from './flights/flight-create/flight-create.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './general/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    FlightScreenComponent,
    BookingScreenComponent,
    CustomerScreenComponent,
    CustomerCreateComponent,
    BookingCreateComponent,
    FlightCreateComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component : HomeScreenComponent},
      {path: 'bookings', component: BookingScreenComponent},
      {path: 'flights', component: FlightScreenComponent},
      {path: 'customers', component: CustomerScreenComponent}
    ]),
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
