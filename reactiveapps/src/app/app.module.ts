import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { GreeterModule } from './greeter/greeter.module';
import { NumbersModule } from './numbers/numbers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    GreeterModule,
    NumbersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
