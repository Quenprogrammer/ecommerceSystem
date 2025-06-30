import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [
    NgForOf
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  discountLabel = '30% OFF';
  discountMessage = 'orders above $50 - Use code FRONT30OFF at checkout.';

  heroImage = '../assets/img/1920x800/img9.jpg';
  heroTitle = "It's never too late";
  heroDescription = 'Simplicity is iconic. Minimal design, maximum style. From glasses to street favorite.';
  heroButtonText = 'Shop now';
  heroButtonLink = '#';

  newsroomHeader = 'Newsroom';
  newsroomSubHeader = 'Latest updates and Hand-picked resources.';

  tags = ['Business', 'Health', 'Environment', 'Adventure'];

  newsCards = [
    {
      image: './assets/img/480x320/img13.jpg',
      logo: './assets/svg/brands/amazon.svg',
      description: 'Amazon launched their enterprise platform and built a powerful user experience.',
      link: './page-customer-story.html',
      linkText: 'Read story'
    }
  ];

  viewAllLink = '#';
  viewAllText = 'View all stories';

  currentPage = 1;
  totalPages = [1, 2, 3, 5];

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages.length) this.currentPage++;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  onSearchSubmit(query: string) {
    console.log('Searching for:', query);
  }

}
