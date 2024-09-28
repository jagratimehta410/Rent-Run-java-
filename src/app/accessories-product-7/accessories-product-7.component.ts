import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-7',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-7.component.html',
  styleUrl: './accessories-product-7.component.css'
})
export class AccessoriesProduct7Component {
  public mainImage: string = 'assets/img/accessories/product-7.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}


