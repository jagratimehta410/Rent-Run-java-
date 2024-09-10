import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductComponent } from '../product/product.component';
import { BannerComponent } from "../banner/banner.component";
import { TrendComponent } from "../trend/trend.component";
import { DiscountComponent } from '../discount/discount.component';
import { ServicesComponent } from "../services/services.component";
import { InstagramComponent } from "../instagram/instagram.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CategoriesComponent, ProductComponent, BannerComponent, TrendComponent, DiscountComponent, ServicesComponent, InstagramComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
