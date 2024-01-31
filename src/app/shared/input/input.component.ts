import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, NgxMaskDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [provideNgxMask()]
})
export class InputComponent {

  @Input() control: FormControl = new FormControl()
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() format = ''
  @Input() prefix = ''

}
