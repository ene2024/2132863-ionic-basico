import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { CamaraComponent } from './camara/camara.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full'
  },
  
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'productoDetalle/:id',
    component: ProductoDetalleComponent
  },
  {
    path: 'camara',
    component: CamaraComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
