import { Component } from '@angular/core';

@Component({
  selector: 'app-kid-product-8-detail',
  standalone: true,
  imports: [],
  templateUrl: './kid-product-8-detail.component.html',
  styleUrl: './kid-product-8-detail.component.css'
})
export class KidProduct8DetailComponent {
  public mainImage: string = 'assets/img/kid/product-8.jpg';  // Default main image
  public thumbnails: string[] = [
    'assets/img/kid/product-8.jpg',
    'assets/img/kid/product-8.1.jpg',
    'assets/img/kid/product-8.2.jpg',
    'assets/img/kid/product-8.3.jpg'
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









