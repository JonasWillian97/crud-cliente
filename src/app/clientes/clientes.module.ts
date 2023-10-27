import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { AtualizarClientesComponent } from './atualizar-clientes/atualizar-clientes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    CadastrarClientesComponent,
    AtualizarClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
