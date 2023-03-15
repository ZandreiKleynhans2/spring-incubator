import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookingEndpointsService } from 'src/app/endpoints/booking/booking-endpoints.service';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-booking-screen',
  templateUrl: './booking-screen.component.html',
  styleUrls: ['./booking-screen.component.css']
})
export class BookingScreenComponent {
  bookings: Booking[] = [
    {
      id: 1,
      referenceNumber: "REF123",
      customerId: 1,
      flightId: 1
    },
    {
      id: 2,
      referenceNumber: "REF456",
      customerId: 2,
      flightId: 2
    },
    {
      id: 3,
      referenceNumber: "REF789",
      customerId: 3,
      flightId: 3
    }
  ];
  private bookingEndpointsService : BookingEndpointsService;
  dataSource = new MatTableDataSource<Booking>();
  
  constructor(bookingEndpointsService : BookingEndpointsService){
    this.bookingEndpointsService = bookingEndpointsService;
  }
  ngOnInit(): void {
    // TODO : Add Call to bookings service here
    this.dataSource.data = this.bookings;
  }
  @ViewChild(MatSort) sort!: MatSort;

  @Input()
  displayedColumns: string[] = ['bookingId', 'referenceNumber', 'customerId', 'flightId'];

}
