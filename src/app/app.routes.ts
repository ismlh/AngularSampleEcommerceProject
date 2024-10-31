import { Routes } from '@angular/router';
import { ProductsComponent } from '../Components/products/products.component';

export const routes: Routes = [
    {path: "Products", component:ProductsComponent},
    {path: "Cart",  loadComponent:()=>import('../Components/cart/cart.component').then((res)=>res.CartComponent)},
    {path: "Order", loadComponent:()=>import('../Components/order/order.component').then((res)=>res.OrderComponent)},
    {path: "Product_Detail/:id", loadComponent:()=>import('../Components/product-detail/product-detail.component').then((res)=>res.ProductDetailComponent)},
    {path: "ProductsOpreations", loadComponent:()=>import('../Components/products-opreation/products-opreation.component').then((res)=>res.ProductsOpreationComponent)},
    {path: "**", redirectTo:'Products', pathMatch: "full"}

];
