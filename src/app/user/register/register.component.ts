import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(''),
    age: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
    phoneNumber: new FormControl(''),
  })
}
