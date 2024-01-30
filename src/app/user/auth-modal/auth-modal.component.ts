import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalService } from '../../services/modal.service';
import { TabContainerComponent } from '../../shared/tab-container/tab-container.component';
import { TabComponent } from '../../shared/tab/tab.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [
    ModalComponent,
    TabContainerComponent,
    TabComponent,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent implements OnInit, OnDestroy{

  constructor(public modal:ModalService){}

  ngOnInit():void
  {
    this.modal.register('auth')
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth')
  }
}
