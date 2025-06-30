import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Ecommerce} from '../sites/ecommerce/ecommerce';
import {Blog} from '../sites/blog/blog';
import {SitesHome} from '../sites/sites-home/sites-home';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    Ecommerce,
    Blog,
    SitesHome
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
