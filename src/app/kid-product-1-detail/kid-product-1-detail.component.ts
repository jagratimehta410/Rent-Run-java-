import { NgFor } from '@angular/common';
import { Component } from '@angular/core'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kid-product-1-detail',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './kid-product-1-detail.component.html',
  styleUrls: ['./kid-product-1-detail.component.css']
})
export class KidProduct1DetailComponent {
  public mainImage: string = 'assets/img/kid/product-1.jpg';  // Default main image
  public thumbnails: string[] = [
    'assets/img/kid/product-1.jpg',
    'assets/img/kid/product-1.1.jpg',
    'assets/img/kid/product-1.2.jpg',
    'assets/img/kid/product-1.3.jpg'
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
