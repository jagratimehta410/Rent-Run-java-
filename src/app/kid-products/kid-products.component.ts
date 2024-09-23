import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KidProduct1DetailComponent } from '../kid-product-1-detail/kid-product-1-detail.component';

@Component({
  selector: 'app-kid-products',
  standalone: true,
  imports: [RouterLink,KidProduct1DetailComponent],
  templateUrl: './kid-products.component.html',
  styleUrl: './kid-products.component.css'
})
export class KidProductsComponent {

}
