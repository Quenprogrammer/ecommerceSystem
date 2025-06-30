import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.html',
  styleUrl: './property-card.css'
})
export class PropertyCard {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() badge: string = '';
  @Input() description: string = '';
  @Input() link: string = '#';
}
