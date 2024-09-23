import { Component } from '@angular/core';
import { WomenProductComponent } from "../women-product/women-product.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [WomenProductComponent,RouterLink],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {

}
