import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccessoriesProductComponent } from '../accessories-product/accessories-product.component';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [RouterLink,AccessoriesProductComponent],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {

}
