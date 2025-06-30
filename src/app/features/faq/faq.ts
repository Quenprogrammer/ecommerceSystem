import {Component, Pipe, PipeTransform} from '@angular/core';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from '@ng-bootstrap/ng-bootstrap';
import {NgForOf} from '@angular/common';
@Pipe({standalone: true, name: 'replaceLineBreaks'})
class ReplaceLineBreaks implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\n/g, '<br/>');
  }
}
@Component({
  selector: 'app-faq',
  imports: [
    NgForOf


  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FAQ {
  faq = [
    {
      question: 'What is an eCommerce system?',
      answer: 'An eCommerce system is a software platform that allows businesses to manage online sales of products or services. It includes tools for inventory, payments, shipping, and customer interactions.'
    },
    {
      question: 'How do I add products to the eCommerce system?',
      answer: 'You can add products through the admin dashboard by providing product details such as name, description, price, category, images, and stock information.'
    },
    {
      question: 'Can I manage orders and track shipments?',
      answer: 'Yes, the system allows you to view and manage orders, update their status, and integrate with shipping carriers for tracking.'
    },
    {
      question: 'Is payment integration available?',
      answer: 'Our eCommerce system supports multiple payment gateways like PayPal, Stripe, and local banks. You can configure your preferred gateway in the settings.'
    },
    {
      question: 'Can customers register and track their orders?',
      answer: 'Yes, customers can create accounts, view their order history, and track shipments directly from their dashboard.'
    },
    {
      question: 'Is the system mobile-friendly?',
      answer: 'Absolutely. The eCommerce platform is fully responsive and optimized for mobile, tablet, and desktop devices.'
    },
    {
      question: 'Does the system support multiple languages and currencies?',
      answer: 'Yes, it supports multilingual content and multiple currencies for international customers.'
    },
    {
      question: 'How secure is the platform?',
      answer: 'Security is a top priority. The system includes SSL support, secure payment integration, and regular updates to address vulnerabilities.'
    },
    {
      question: 'Can I offer discounts or promo codes?',
      answer: 'Yes, the system has built-in functionality to create discount codes, promotional campaigns, and limited-time offers.'
    },
    {
      question: 'How do I get support if I run into issues?',
      answer: 'You can contact our support team through live chat, email, or our helpdesk for technical assistance and training.'
    }
  ];

}
