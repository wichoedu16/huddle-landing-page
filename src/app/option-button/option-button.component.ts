import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.css']
})
export class OptionButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() text: string = '';
}
