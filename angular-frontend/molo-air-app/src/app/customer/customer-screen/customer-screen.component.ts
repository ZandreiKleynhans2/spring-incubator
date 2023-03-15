import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerEndpointsService } from 'src/app/endpoints/customer/customer-endpoints.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-screen',
  templateUrl: './customer-screen.component.html',
  styleUrls: ['./customer-screen.component.css']
})
export class CustomerScreenComponent implements OnInit{
  customers: Customer[] = [
    {
      id: 1,
      username: "johndoe",
      firstName: "John",
      lastName: "Doe",
      passportNumber: "ABC123",
      email: "johndoe@example.com",
      phoneNumber: "555-1234"
    },
    {
      id: 2,
      username: "janedoe",
      firstName: "Jane",
      lastName: "Doe",
      passportNumber: "DEF456",
      email: "janedoe@example.com",
      phoneNumber: "555-5678"
    },
    {
      id: 3,
      username: "bobsmith",
      firstName: "Bob",
      lastName: "Smith",
      passportNumber: "GHI789",
      email: "bobsmith@example.com",
      phoneNumber: "555-9101"
    }
  ];
  private customerEndpointsService : CustomerEndpointsService;
  dataSource = new MatTableDataSource<Customer>();
  
  constructor(customerEndpointsService : CustomerEndpointsService){
    this.customerEndpointsService = customerEndpointsService;
  }
  ngOnInit(): void {
    this.customerEndpointsService.getAllCustomers().subscribe( result =>{
      console.log(result);
    });
    this.dataSource.data = this.customers;
  }
  @ViewChild(MatSort) sort!: MatSort;

  @Input()
  displayedColumns: string[] = ['customerId', 'username', 'firstName', 'lastName', 'passportNumber', 'email','phoneNumber'];
}
