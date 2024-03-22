import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagetitle.component.html',
  styleUrl: './pagetitle.component.scss'
})
export class PagetitleComponent {
   
  @Input() title:string =''
  constructor()
  {
  }
  
}
