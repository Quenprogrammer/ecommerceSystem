import { Component } from '@angular/core';
import {PropertyCard} from '../../../core/components/property-card/property-card';
import {NgForOf} from '@angular/common';
import {Header2Center} from '../../../core/components/header2-center/header2-center';
import {HeaderAndTag} from '../../../core/components/header-and-tag/header-and-tag';
import {PropertyCardDetails} from '../../../core/components/property-card-details/property-card-details';
import {Statistic, StatisticsWidget} from '../../../core/components/statistics-widget/statistics-widget';

@Component({
  selector: 'app-ecommerce',
  imports: [
    PropertyCard,
    NgForOf,
    Header2Center,
    HeaderAndTag,
    PropertyCardDetails,
    StatisticsWidget,

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
  statisticsData: Statistic[] = [
    { value: 20000, unit: 'ML', label: 'Records', classStyle: 'bi-person fs-1 text-primary', duration: 10000, interval: 100 },
    { value: 200000, unit: 'MB', label: 'Storage', classStyle: 'bi-clock-history fs-1 text-primary', duration: 10000, interval: 20 },
    { value: 650, unit: 'ms', label: 'Speed', classStyle: 'bi-files-alt fs-1 text-primary', duration: 3000, interval: 15 },
    { value: 800, unit: 'ms', label: 'CRUD Operations', classStyle: 'bi-pie-chart fs-1 text-primary', duration: 3500, interval: 12 }
  ]





// In your component.ts
  mainSlideHeading = 'Front is a';
  mainSlideTitle = 'Self-mastering template';
  thumbSlideHeading = 'Advanced editing';
  thumbSlideDescription = 'Modify any aspect of your website or pages with Front.';
  thumbNextSlideHeading = 'Next: Fully responsive';
  thumbNextSlideDescription = 'Let visitors to view your content from their choice of device.';
  propertyButtonText = 'View all properties for sale';
  card1Title = 'Find homes for sale';
  card1Description = 'Over 1 million+ homes for sale available on the website.';
  card1LinkText = 'Properties for sale';
  cityTitle = 'Browse properties by city in the UK';
  cityDescription = 'Take a deep dive and browse original neighborhood photos, drone footage, resident reviews and local insights to see if the homes for sale are right for you.';

}
