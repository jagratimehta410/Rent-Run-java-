import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KidProductsComponent } from '../kid-products/kid-products.component';

@Component({
  selector: 'app-kid',
  standalone: true,
  imports: [RouterLink,KidProductsComponent],
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.css'
})
export class KidComponent {

}
