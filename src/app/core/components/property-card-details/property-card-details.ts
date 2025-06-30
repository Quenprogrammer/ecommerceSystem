import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-property-card-details',
  imports: [],
  templateUrl: './property-card-details.html',
  styleUrl: './property-card-details.css'
})
export class PropertyCardDetails {
  @Input() image: string = '';
  @Input() badge: string = '';
  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() link: string = '#';
  @Input() bed: string = '';
  @Input() bath: string = '';
  @Input() sqft: string = '';
}
