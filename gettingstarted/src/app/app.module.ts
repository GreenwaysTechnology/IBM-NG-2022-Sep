import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent], //view objects
  imports: [BrowserModule], //sub module objects
  providers: [], //service objects
  bootstrap:[AppComponent]
})
export class AppModule { }