import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { FacturaListadoComponent } from './pages/factura-listado/factura-listado.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listado',
    component: ListadoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos',
    component: ProductosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factura',
    component: FacturaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'facturaListado',
    component: FacturaListadoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
