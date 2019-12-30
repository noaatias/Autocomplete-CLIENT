import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesService } from './services/employees.service';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {MatInputModule} from '@angular/material/input';
import { EmployeesListComponent } from './employeesList/employeesList.component';
import { EmployeesResultsComponent } from './employeesResults/employeesResults.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      AutocompleteComponent,
      EmployeesListComponent,
      EmployeesResultsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatInputModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      NgxSpinnerModule,
      ClickOutsideModule

   ],
   providers: [
      EmployeesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
