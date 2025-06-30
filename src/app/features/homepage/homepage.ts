import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Ecommerce} from '../sites/ecommerce/ecommerce';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    Ecommerce
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
