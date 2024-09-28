import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-4',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-4.component.html',
  styleUrl: './accessories-product-4.component.css'
})
export class AccessoriesProduct4Component {

  public mainImage: string = 'assets/img/accessories/product-4.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}


