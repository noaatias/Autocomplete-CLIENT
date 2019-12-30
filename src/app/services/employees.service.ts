import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employee: Observable<Employee>;
  baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "employees");
  }

  getEmployeesByInput(input): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "employees/" + input);
  }

  setEmployee(employee): Observable<Employee> {
    this.employee = employee;
    return employee;
  }
}
