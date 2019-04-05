import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.sass']
})
export class FormValidationComponent implements OnInit {
  user: User;
  myRegex = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$';
  constructor() { }
  ngOnInit() {
    this.user = new User('', '', '');
  }
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
  }
}