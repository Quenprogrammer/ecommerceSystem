import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
interface TemplateItem {
  name: string;
  price: number;
  image: string;
  shortDescription: string;
  previewImage: string;
  link: string;
}
@Component({
  selector: 'app-sites-home',
  imports: [
    RouterLink
  ],
  template: `
    <div class="container content-space-1">

      <div class="row">

        <div class="col-sm-12">
          <div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
            @for(items of templateItems; track items.name){
              <div class="col mb-4">
                <!-- Card -->
                <a class="card card-sm card-transition h-100"  [routerLink]="items.link" data-aos="fade-up">
                  <img class="card-img p-2" [routerLink]="items.link" [src]="items.image" alt="Image Description">
                  <div class="card-body">
                    <h5 class="card-title text-inherit">{{items.name}}</h5>
                    <p class="card-text small text-body">{{items.shortDescription}}</p>
                  </div>
                </a>
                <!-- End Card -->
              </div>
            }
          </div>
          <!-- End Row -->
        </div>
        <!-- End Col -->
      </div>
    </div>


  `,

})
export class SitesHome {
  templateItems: TemplateItem[] = [
    {
      name: 'E-commerce Page',
      price: 25000,
      image: 'assets/templates/ecommerce-thumb.jpg',
      shortDescription: 'A sleek and responsive e-commerce template suitable for small to medium businesses.',
      previewImage: 'assets/templates/ecommerce-preview.jpg',
      link: '/templates/ecommerce'
    },
    {
      name: 'Blog Page',
      price: 12000,
      image: 'assets/templates/blog-thumb.jpg',
      shortDescription: 'A clean and content-focused blog design ideal for writers and media outlets.',
      previewImage: 'assets/templates/blog-preview.jpg',
      link: '/templates/blog'
    },
    {
      name: 'Online Courses',
      price: 30000,
      image: 'assets/templates/courses-thumb.jpg',
      shortDescription: 'An education-focused layout for selling and managing online courses.',
      previewImage: 'assets/templates/courses-preview.jpg',
      link: '/templates/courses'
    },
    {
      name: 'Job Board',
      price: 18000,
      image: 'assets/templates/jobs-thumb.jpg',
      shortDescription: 'A functional and modern job listing interface with search and filtering features.',
      previewImage: 'assets/templates/jobs-preview.jpg',
      link: '/templates/jobs'
    },
    {
      name: 'Real Estate Listing',
      price: 28000,
      image: 'assets/templates/realestate-thumb.jpg',
      shortDescription: 'A beautiful real estate portal layout with property filtering and gallery options.',
      previewImage: 'assets/templates/realestate-preview.jpg',
      link: '/templates/real-estate'
    }
  ];

}
