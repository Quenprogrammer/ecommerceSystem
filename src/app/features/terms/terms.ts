import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
interface TermsSection {
  id: string;
  title: string;
  content: string[];
}
@Component({
  selector: 'app-terms',
  imports: [
    NgForOf
  ],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class Terms {
  headerContent = [
    "Thanks for using our products and services ('Services'). The Services are provided by HAIDAR ECOMMERCE, located in Nigeria, Kano.",
    "By using our Services, you are agreeing to these terms. Please read them carefully.",
    "Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services."
  ];

  termsAndConditions: TermsSection[] = [
    {
      id: "accountInfo",
      title: "1. Accounts",
      content: [
        "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.",
        "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.",
        "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
      ]
    },
    {
      id: "linksToOtherWebsInfo",
      title: "2. Links to other websites",
      content: [
        "Our Service may contain links to third-party websites or services that are not owned or controlled by HAIDAR ECOMMERCE.",
        "HAIDAR ECOMMERCE has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that HAIDAR ECOMMERCE shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.",
        "We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit."
      ]
    },
    {
      id: "terminationInfo",
      title: "3. Termination",
      content: [
        "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
        "All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.",
        "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service."
      ]
    },
    {
      id: "goveringLawInfo",
      title: "4. Governing Law",
      content: [
        "These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.",
        "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had regarding the Service."
      ]
    },
    {
      id: "changesInfo",
      title: "5. Changes",
      content: [
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service."
      ]
    }
  ];

  lastUpdate: string = '1 January 2025';


}

