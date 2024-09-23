import { Component } from '@angular/core';
import { InstagramComponent } from "../instagram/instagram.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [InstagramComponent,RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
