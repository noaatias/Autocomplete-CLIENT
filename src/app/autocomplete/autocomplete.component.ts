import { EmployeesService } from '../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  employees: Employee[];
  oneEmployee: Employee;
  searchValue: string;
  dropDown: boolean = false;
  isShowResults: boolean;

  constructor(private employeesService: EmployeesService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  onBlur() {
    this.dropDown = false;
  }

  loadEmployees() {
    this.employeesService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.spinner.hide()
    }, error => {
      console.log(error)
    })
  }

  loadEmployeesByInput() {
    this.employeesService.getEmployeesByInput(this.searchValue).subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.spinner.hide()

    }, error => {
      console.log(error)
    })
  }

  search(event) {
    if (event.key !== "Enter") {
      this.isShowResults = false;
      this.dropDown = true;
      if (this.searchValue) {
        this.loadEmployeesByInput()
      }
      else {
        this.loadEmployees()
      }
    }
  }

  onEnter() {
    this.dropDown = false;
    this.isShowResults = true;
  }

  onFocus() {
    this.spinner.show()
    this.dropDown = true;
    this.isShowResults = false;
    if (!this.searchValue) {
      this.loadEmployees()
    }
    else {
      this.loadEmployeesByInput()
    }
  }

  addItem(newItem: Employee) {
    this.employeesService.getEmployeesByInput(newItem.name).subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.dropDown = false;
      this.isShowResults = true;
      this.searchValue = newItem.name
    }, error => {
      console.log(error)
    })
  }
}
