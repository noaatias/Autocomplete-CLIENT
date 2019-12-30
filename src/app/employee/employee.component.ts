import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/Employee';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input() inputValue: string;
  @Output() newEmployee = new EventEmitter<Employee>();

  passNewEmployee() {
    this.newEmployee.emit(this.employee);
  }

  constructor(public shared: SharedService) { }

  ngOnInit() {
  }

}
