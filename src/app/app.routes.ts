import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  
    {path:"",component:HomeComponent},
    {path:"women",component:WomenComponent},
    {path:"men",component:MenComponent},
    {path:"shop",component:ShopComponent}

   



];
