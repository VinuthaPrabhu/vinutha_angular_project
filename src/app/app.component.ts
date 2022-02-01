import { Component, Input, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name;
  phone;
  email;
  city;
  formGroupOne;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.formGroupOne = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      city: [''],
    });
  }

  display;
}
