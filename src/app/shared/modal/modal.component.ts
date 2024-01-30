import { Component, Input, ElementRef} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() modalID = ''
  constructor(public modal:ModalService, public el:ElementRef){}

  ngOnInit():void{
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal()
  {
    this.modal.toggleModal(this.modalID);
  }
}
