import { Component } from '@angular/core';

@Component({
  selector: 'app-kid-product-7-detail',
  standalone: true,
  imports: [],
  templateUrl: './kid-product-7-detail.component.html',
  styleUrl: './kid-product-7-detail.component.css'
})
export class KidProduct7DetailComponent {

  public mainImage: string = 'assets/img/kid/product-7.jpg';  // Default main image
  public thumbnails: string[] = [
    'assets/img/kid/product-7.jpg',
    'assets/img/kid/product-7.1.jpg',
    'assets/img/kid/product-7.2.jpg',
    'assets/img/kid/product-7.3.jpg'
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









