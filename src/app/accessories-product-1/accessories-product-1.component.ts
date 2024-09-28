import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-1',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-1.component.html',
  styleUrl: './accessories-product-1.component.css'
})
export class AccessoriesProduct1Component {
  public mainImage: string = 'assets/img/accessories/product-1.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}