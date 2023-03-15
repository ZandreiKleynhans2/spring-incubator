import { Component, OnInit } from '@angular/core';
import { CustomerEndpointsService } from 'src/app/endpoints/customer/customer-endpoints.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-screen',
  templateUrl: './customer-screen.component.html',
  styleUrls: ['./customer-screen.component.css']
})
export class CustomerScreenComponent implements OnInit{
  private customerArr : Customer[] = [];
  private customerEndpointsService : CustomerEndpointsService;
  constructor(customerEndpointsService : CustomerEndpointsService){
    this.customerEndpointsService = customerEndpointsService;
  }
  ngOnInit(): void {
    this.customerEndpointsService.getAllCustomers().subscribe( result =>{
      console.log(result);
    });
  }
}
