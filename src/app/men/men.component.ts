import { Component } from '@angular/core';
import { MenProductComponent } from "../men-product/men-product.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [MenProductComponent,RouterLink],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {

}
