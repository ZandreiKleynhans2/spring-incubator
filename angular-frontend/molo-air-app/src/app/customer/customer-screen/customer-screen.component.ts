import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerEndpointsService } from 'src/app/endpoints/customer/customer-endpoints.service';
import { Customer } from 'src/app/models/customer';
import Swal from 'sweetalert2';

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

  
  async onAddCustomerClick(): Promise<void> {
    const steps = ['1', '2', '3', '4' ,'5'];
    const stepNames = ['Username','Full Name', 'Passport Number','Email Address','Phone Number'];
    const swalQueueStep = Swal.mixin({
      confirmButtonText: 'Ok',
      cancelButtonText: 'Back',
      progressSteps: steps,
      input: 'text',
      inputAttributes: {
        required: 'true'
      },
      reverseButtons: true,
      validationMessage: 'This field is required'
    })
    
    const values = []
    let currentStep
    
    for (currentStep = 0; currentStep < steps.length;) {
      const result : any = await swalQueueStep.fire({
        title: `Please enter ${stepNames[currentStep]}`,
        inputValue: values[currentStep],
        showCancelButton: currentStep > 0,
        currentProgressStep: currentStep
      })
    
      if (result.value) {
        values[currentStep] = result.value
        currentStep++
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        currentStep--
      } else {
        break
      }
    }
    
    if (currentStep === steps.length) {
      this.customers.push(
      { id: 1,
        username: values[0],
        firstName: values[1].split(' ')[0],
        lastName: values[1].split(' ')[1],
        passportNumber: values[2],
        email: values[3],
        phoneNumber: values[4]
      });
      console.log(this.customers);
      this.dataSource.data = this.customers;
    }
}
}

