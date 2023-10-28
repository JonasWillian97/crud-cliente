import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastrarClientesComponent } from './cadastrar-clientes/cadastrar-clientes.component';
import { AtualizarClientesComponent } from './atualizar-clientes/atualizar-clientes.component';

const routes: Routes = [
  {path:"", component: ClientesComponent},
  {path:"cadastrar", component: CadastrarClientesComponent},
  {path:"atualizar/:id", component: AtualizarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
