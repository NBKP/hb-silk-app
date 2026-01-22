import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-silk-product',
  imports: [[CommonModule, RouterModule]],
  templateUrl: './silk-product.html',
  styleUrl: './silk-product.css',
})
export class SilkProduct {
    productId: string = '';
  product: any;

  products: any[] = [
    {
      id: 'item-a',
      name: 'Golden Kurta',
      image: '/assets/cream_no_sheen-1.jpg',
      description: 'High quality and premium design for professionals.',
      price: '₹11,999'
    },
    {
      id: 'item-b',
      name: 'Royal Saree',
      image: '/assets/382005_Blue_Latest-Designer-Satin-Silk-Saree-With-Printed-Blouse-Piece-At-Shubhkala-Fashion_RJ-382005_1.webp',
      description: 'Elegant, modern and built with care.',
      price: '₹23,499'
    },
    {
      id: 'item-c',
      name: 'Green Kurta Suit',
      image: '/assets/0ab0c2e1650ff08490b894825f2ddca1.jpg',
      description: 'Minimalistic touch for your everyday use.',
      price: '₹20,799'
    },
    {
      id: 'item-d',
      name: 'Gold Evening Dress',
      image: '/assets/EDG1710258615.webp',
      description: 'A bold model with futuristic design excellence.',
      price: '₹30,999'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.product = this.products.find(p => p.id === this.productId);
  }

}
