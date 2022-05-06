import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { ActiveComponent } from './active/active.component';
import { SecondModule } from './second.module';

@NgModule({
  imports: [BrowserModule, FormsModule, SecondModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TestComponent,
    ProductComponent,
    ActiveComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
