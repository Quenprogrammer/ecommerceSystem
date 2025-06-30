import {Component, OnInit, signal} from '@angular/core';
import {ElectronicsProduct, electronicsProducts} from '../../data/products';
import {ActivatedRoute} from '@angular/router';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-view-products',
  imports: [

    KeyValuePipe,

    FormsModule
  ],
  templateUrl: './view-products.html',
  styleUrl: './view-products.css'
})
export class ViewProducts implements OnInit{
  isModal2Open = signal(false);
  isModal3Open = signal(false);
  product: ElectronicsProduct | undefined;
  quantity: number = 1;
  path:string='apps/'
  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const nameParam = this.route.snapshot.paramMap.get('name');
    this.product = electronicsProducts.find(p => p.name === nameParam);
  }
  Banks = [

    {
      name: "First Bank",
      sn: "15",
      link: "https://www.firstbanknigeria.com",
      image: this.path + "firstBank.png"
    },
    {
      name: "GT Bank",
      sn: "18",
      link: "https://www.gtbank.com",
      image: this.path + "gtbank.png"
    },
    {
      name: "Jaiz Bank",
      sn: "19",
      link: "https://jaizbankplc.com",
      image: this.path + "jaizbank.png"
    },
    {
      name: "Kuda",
      sn: "21",
      link: "https://www.kuda.com",
      image: this.path + "kuda.jpg"
    },
    {
      name: "Opay",
      sn: "27",
      link: "https://www.opayweb.com",
      image: this.path + "opay.png"
    },
    {
      name: "Palmpay",
      sn: "28",
      link: "https://www.palmpay.com",
      image: this.path + "palmpay.jpg"
    },
    {
      name: "Unity Bank",
      sn: "37",
      link: "https://www.unitybankng.com",
      image: this.path + "unitybank.png"
    },
    {
      name: "Zenith Bank",
      sn: "41",
      link: "https://www.zenithbank.com",
      image: this.path + "zenithBank.png"
    },
    // Additional Banks
    {
      name: "Access Bank",
      sn: "42",
      link: "https://www.accessbankplc.com",
      image: this.path + "accessBank.png"
    },
    {
      name: "UBA",
      sn: "43",
      link: "https://www.ubagroup.com",
      image: this.path + "uba.png"
    },
    {
      name: "Sterling Bank",
      sn: "44",
      link: "https://www.sterlingbankng.com",
      image: this.path + "sterlingBank.png"
    },
    {
      name: "EcoBank",
      sn: "45",
      link: "https://www.ecobank.com",
      image: this.path + "ecobank.png"
    },



  ];
}
