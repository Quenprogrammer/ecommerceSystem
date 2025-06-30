import { Component } from '@angular/core';
import {PropertyCard} from '../../../core/components/property-card/property-card';
import {NgForOf} from '@angular/common';
import {Header2Center} from '../../../core/components/header2-center/header2-center';
import {HeaderAndTag} from '../../../core/components/header-and-tag/header-and-tag';
import {PropertyCardDetails} from '../../../core/components/property-card-details/property-card-details';

@Component({
  selector: 'app-ecommerce',
  imports: [
    PropertyCard,
    NgForOf,
    Header2Center,
    HeaderAndTag,
    PropertyCardDetails,

  ],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.css'
})
export class Ecommerce {
  cards = [
    {
      image: '../assets/img/480x320/img28.jpg',
      title: 'London',
      badge: '3521 offers',
      description: 'Prices from £5,490,000',
      link: '../demo-real-estate/property-grid.html'
    },

  ];


  listing = {
    image: '../assets/img/480x320/img23.jpg',
    badge: 'New',
    subtitle: 'For sale',
    title: 'Borrett Close, London',
    price: '£689,000',
    link: '../demo-real-estate/property-overview.html',
    bed: '3',
    bath: '2',
    sqft: '1,428'
  };
  menuHeader: string='Front helps you make better property decisions';
  menuHeaderTagLine: string='Front has England\'s largest collection of street and suburb reviews, empowering you to find the right area for you to move to. With tens of thousands of local community topics and discussions, find the answers to all your questions about an area, or ask the locals.';
}
