import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { PagenotfoundComponent } from './pagenotfound.component';
import { ProductsModule } from './products/products.module';
import { DashboardComponent } from './dashboard.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    
    ContactModule,
    ProductsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PagenotfoundComponent,
    DashboardComponent
  ]
})
export class AppModule { }
