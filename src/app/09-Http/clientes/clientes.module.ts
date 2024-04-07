import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { AgregarClientesComponent } from './components/agregar-clientes/agregar-clientes.component';
import { InicioClientesComponent } from './pages/inicio-clientes/inicio-clientes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListarClientesComponent,
    AgregarClientesComponent,
    InicioClientesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    InicioClientesComponent,
    ListarClientesComponent,
  ]
})
export class ClientesModule { }
