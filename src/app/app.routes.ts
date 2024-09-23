import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { ShopComponent } from './shop/shop.component';
import { KidComponent } from './kid/kid.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { KidProduct1DetailComponent } from './kid-product-1-detail/kid-product-1-detail.component';

export const routes: Routes = [
  
    {path:"",component:HomeComponent},
    {path:"women",component:WomenComponent},
    {path:"men",component:MenComponent},
    {path:"kid",component:KidComponent},
    {path:"accessories",component:AccessoriesComponent},
    {path:"kid-product-1",component:KidProduct1DetailComponent},

    {path:"shop",component:ShopComponent}

   



];
