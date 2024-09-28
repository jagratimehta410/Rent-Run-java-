import { Component } from '@angular/core';

@Component({
  selector: 'app-kid-product-4-detail',
  standalone: true,
  imports: [],
  templateUrl: './kid-product-4-detail.component.html',
  styleUrl: './kid-product-4-detail.component.css'
})
export class KidProduct4DetailComponent {
  public mainImage: string = 'assets/img/kid/product-4.jpg';  // Default main image
  public thumbnails: string[] = [
    'assets/img/kid/product-4.jpg',
    'assets/img/kid/product-4.1.jpg',
    'assets/img/kid/product-4.2.jpg',
    'assets/img/kid/product-4.3.jpg'
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




