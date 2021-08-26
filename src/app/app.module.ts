import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RoutingModule } from './routing/routing.module';
import { SecurityService } from './security.service';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, ProductListComponent, CategoryListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SecurityService, AuthGuard]
})
export class AppModule { }
