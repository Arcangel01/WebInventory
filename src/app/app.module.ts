import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './api/data.service';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductService } from './api/product.service';
import { ProductosComponent } from './pages/productos/productos.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { FacturaListadoComponent } from './pages/factura-listado/factura-listado.component';
import { FacturaService } from './api/factura.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    FooterComponent,
    MenuComponent,
    ListadoComponent,
    ProductosComponent,
    FacturaComponent,
    FacturaListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DataService, ProductService, FacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
