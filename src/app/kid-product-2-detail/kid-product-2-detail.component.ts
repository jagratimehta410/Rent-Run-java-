import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kid-product-2-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './kid-product-2-detail.component.html',
  styleUrl: './kid-product-2-detail.component.css'
})
export class KidProduct2DetailComponent {
    // Array of image thumbnails
    thumbnails: string[] = [
      'assets/img/kid/product-2.jpg',
      'assets/img/kid/product-2.1.jpg',
      'assets/img/kid/product-2.2.jpg',
      'assets/img/kid/product-2.3.jpg'
    ];
  
    // The main image displayed
    mainImage: string = this.thumbnails[0]; // Default to the first image
    isModalOpen: boolean = false; // Modal status
  
    // Function to change the main image when thumbnail is clicked
    changeImage(imageUrl: string) {
      this.mainImage = imageUrl;
    }
  
    // Function to open the modal
    openModal() {
      this.isModalOpen = true;
    }
  
    // Function to close the modal
    closeModal() {
      this.isModalOpen = false;
    }
  }