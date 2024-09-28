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
import { KidProduct2DetailComponent } from './kid-product-2-detail/kid-product-2-detail.component';
import { KidProduct3DetailComponent } from './kid-product-3-detail/kid-product-3-detail.component';
import { KidProduct4DetailComponent } from './kid-product-4-detail/kid-product-4-detail.component';
import { KidProduct5DetailComponent } from './kid-product-5-detail/kid-product-5-detail.component';
import { KidProduct6DetailComponent } from './kid-product-6-detail/kid-product-6-detail.component';
import { KidProduct7DetailComponent } from './kid-product-7-detail/kid-product-7-detail.component';
import { KidProduct8DetailComponent } from './kid-product-8-detail/kid-product-8-detail.component';
import { AccessoriesProduct1Component } from './accessories-product-1/accessories-product-1.component';
import { AccessoriesProduct2Component } from './accessories-product-2/accessories-product-2.component';
import { AccessoriesProduct3Component } from './accessories-product-3/accessories-product-3.component';
import { AccessoriesProduct4Component } from './accessories-product-4/accessories-product-4.component';
import { AccessoriesProduct5Component } from './accessories-product-5/accessories-product-5.component';
import { AccessoriesProduct6Component } from './accessories-product-6/accessories-product-6.component';
import { AccessoriesProduct7Component } from './accessories-product-7/accessories-product-7.component';
import { AccessoriesProduct8Component } from './accessories-product-8/accessories-product-8.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  
    {path:"",component:HomeComponent},
    {path:"women",component:WomenComponent},
    {path:"men",component:MenComponent},
    {path:"kid",component:KidComponent},
    {path:"login",component:LoginComponent},
    {path:"product",component:ProductComponent},


    {path:"accessories",component:AccessoriesComponent},
    {path:"kid-product-1",component:KidProduct1DetailComponent},
    {path:"kid-product-2",component:KidProduct2DetailComponent},
    {path:"kid-product-3",component:KidProduct3DetailComponent},
    {path:"kid-product-4",component:KidProduct4DetailComponent},
    {path:"kid-product-5",component:KidProduct5DetailComponent},
    {path:"kid-product-6",component:KidProduct6DetailComponent},
    {path:"kid-product-7",component:KidProduct7DetailComponent},
    {path:"kid-product-8",component:KidProduct8DetailComponent},

    {path:"accessories-product-1",component:AccessoriesProduct1Component},
    {path:"accessories-product-2",component:AccessoriesProduct2Component},
    {path:"accessories-product-3",component:AccessoriesProduct3Component},
    {path:"accessories-product-4",component:AccessoriesProduct4Component},
    {path:"accessories-product-5",component:AccessoriesProduct5Component},
    {path:"accessories-product-6",component:AccessoriesProduct6Component},
    {path:"accessories-product-7",component:AccessoriesProduct7Component},
    {path:"accessories-product-8",component:AccessoriesProduct8Component},


    {path:"shop",component:ShopComponent}

   



];
