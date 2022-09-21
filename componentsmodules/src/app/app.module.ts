import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
// import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    // AppComponent,HeaderComponent
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
