import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-6',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-6.component.html',
  styleUrl: './accessories-product-6.component.css'
})
export class AccessoriesProduct6Component {
  public mainImage: string = 'assets/img/accessories/product-6.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}


