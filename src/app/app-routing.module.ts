import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './07-Rutas/inicio/inicio.component';
import { VentasComponent } from './07-Rutas/ventas/ventas.component';
import { ComprasComponent } from './07-Rutas/compras/compras.component';
import { Pagina404Component } from './07-Rutas/pagina404/pagina404.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'ventas', component:VentasComponent},
  {path:'compras', component:ComprasComponent},
  {path:'**', component:Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
