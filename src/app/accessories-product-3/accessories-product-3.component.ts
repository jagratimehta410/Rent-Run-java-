import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-3',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-3.component.html',
  styleUrl: './accessories-product-3.component.css'
})
export class AccessoriesProduct3Component {
  public mainImage: string = 'assets/img/accessories/product-3.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}

