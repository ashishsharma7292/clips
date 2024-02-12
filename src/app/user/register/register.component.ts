import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showAlert:boolean = false
  alertMsg = ''
  alertColor = ''

  name = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.minLength(3)
  ])
  age = new FormControl('',[
    Validators.required,
    Validators.minLength(1),
    Validators.min(18),
    Validators.max(100)
  ])
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm)
  ])
  confirm_password = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm)
  ])
  phoneNumber = new FormControl('',[
    Validators.required,
    Validators.minLength(10)
  ])

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber
  })

  register()
  {
    this.showAlert = true
    this.alertColor = 'blue'
    this.alertMsg = 'Please wait! Your account is being created.'
  }
}
