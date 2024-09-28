import { Component } from '@angular/core';

@Component({
  selector: 'app-accessories-product-5',
  standalone: true,
  imports: [],
  templateUrl: './accessories-product-5.component.html',
  styleUrl: './accessories-product-5.component.css'
})
export class AccessoriesProduct5Component {

  public mainImage: string = 'assets/img/accessories/product-5.jpg';  // Default main image
 

  public showModal: boolean = false;


  openModal() {
    this.showModal = true; // Show the modal
  }

  closeModal() {
    this.showModal = false; // Hide the modal
  }
}


