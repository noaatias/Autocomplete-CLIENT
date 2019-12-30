import { Employee } from './../models/Employee';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employeesResults',
  templateUrl: './employeesResults.component.html',
  styleUrls: ['./employeesResults.component.css']
})
export class EmployeesResultsComponent implements OnInit {
  @Input() employees: Employee[];

  constructor() { }

  ngOnInit() {
  }

}
