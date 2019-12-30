import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employeesList',
  templateUrl: './employeesList.component.html',
  styleUrls: ['./employeesList.component.css']
})
export class EmployeesListComponent implements OnInit {
  @Input() employees: Employee[];
  @Input() inputValue: string;
  @Output() employeeSpec = new EventEmitter<Employee>();

  employeeNew: Employee;

  constructor() { }

  ngOnInit() {
  }
  
  addEmployee(newEmployee: Employee) {
    this.employeeNew = newEmployee;
  }

  passEmployee() {
    this.employeeSpec.emit(this.employeeNew);
  }

}
