import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerEndpointsService {

  apiUrl : string = environment.customerUrl
  
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization',environment.authToken);
    headers = headers.append('Content-Type','application/json');
    const options = {withCredentials:true,headers};
    return this.http.get<Customer[]>(`${this.apiUrl}customers`, options);
  } 

}
