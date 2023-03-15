import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlightEndpointsService } from 'src/app/endpoints/flight/flight-endpoints.service';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flight-screen',
  templateUrl: './flight-screen.component.html',
  styleUrls: ['./flight-screen.component.css']
})
export class FlightScreenComponent {
  flights: Flight[] = [
    {
      id: 1,
      flightNumber: "AC123",
      origin: "Toronto",
      destination: "Vancouver",
      departureTime: new Date("2023-04-01T12:00:00Z"),
      arrivalTime: new Date("2023-04-01T15:00:00Z"),
      seatsAvailable: 50,
      seatCost: 150.00
    },
    {
      id: 2,
      flightNumber: "WS456",
      origin: "Calgary",
      destination: "Toronto",
      departureTime: new Date("2023-04-02T10:00:00Z"),
      arrivalTime: new Date("2023-04-02T14:00:00Z"),
      seatsAvailable: 100,
      seatCost: 200.00
    },
    {
      id: 3,
      flightNumber: "AC789",
      origin: "Montreal",
      destination: "New York",
      departureTime: new Date("2023-04-03T08:00:00Z"),
      arrivalTime: new Date("2023-04-03T10:00:00Z"),
      seatsAvailable: 75,
      seatCost: 175.00
    }
  ];

  private flightEndpointsService : FlightEndpointsService;
  dataSource = new MatTableDataSource<Flight>();
  
  constructor(flightEndpointsService : FlightEndpointsService){
    this.flightEndpointsService = flightEndpointsService;
  }
  ngOnInit(): void {
    // TODO : Add Call to flights service here
    this.dataSource.data = this.flights;
  }
  @ViewChild(MatSort) sort!: MatSort;

  @Input()
  displayedColumns: string[] = ['flightId', 'flightNumber', 'origin', 'destination', 'departureTime', 'arrivalTime','seatsAvailable','seatCost'];

}
