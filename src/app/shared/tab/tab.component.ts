import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() tabTitle = ''

  @Input() active:boolean = false;
}
