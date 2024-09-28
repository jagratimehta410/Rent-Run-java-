import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-2',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-2.component.html',
  styleUrl: './accessories-product-2.component.css'
})
export class AccessoriesProduct2Component {

  public mainImage: string = 'assets/img/accessories/product-2.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}

