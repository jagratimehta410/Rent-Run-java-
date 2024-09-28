import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-8',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-8.component.html',
  styleUrl: './accessories-product-8.component.css'
})
export class AccessoriesProduct8Component {
  public mainImage: string = 'assets/img/accessories/product-8.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}



