import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imagen: string = '';
}