import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import { BooksComponent } from './products/books.component';
import { ElectronicsComponent } from './products/electronics.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user.component';
import { UserlistComponent } from './users/userlist.component';

//routing rules: routing configuration/
//when i click particular menu, which compoent should be displayed
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'users', component: UserlistComponent
  },
  {
    path: 'users/:id', component: UserComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'electronics', component: ElectronicsComponent }
    ]
  },
  {
    path: 'yourhome', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path: '**', component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
