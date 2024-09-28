import { Component } from '@angular/core';

@Component({
  selector: 'app-kid-product-3-detail',
  standalone: true,
  imports: [],
  templateUrl: './kid-product-3-detail.component.html',
  styleUrl: './kid-product-3-detail.component.css'
})
export class KidProduct3DetailComponent {
  public mainImage: string = 'assets/img/kid/product-3.jpg';  // Default main image
  public thumbnails: string[] = [
    'assets/img/kid/product-3.jpg',
    'assets/img/kid/product-3.1.jpg',
    'assets/img/kid/product-3.2.jpg',
    'assets/img/kid/product-3.3.jpg'
  ];

  public showModal: boolean = false;

  changeImage(image: string) {
    console.log('Changing image to:', image);
    this.mainImage = image;  // Update the main image
  }

  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}


