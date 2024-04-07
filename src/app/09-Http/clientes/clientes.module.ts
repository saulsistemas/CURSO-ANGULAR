import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { InicioClientesComponent } from './pages/inicio-clientes/inicio-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarClientesComponent } from './components/actualizar-clientes/actualizar-clientes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListarClientesComponent,
    AgregarClientesComponent,
    InicioClientesComponent,
    ActualizarClientesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InicioClientesComponent,
    ListarClientesComponent,
    AgregarClientesComponent,
    ActualizarClientesComponent,
  ]
})
export class ClientesModule { }
