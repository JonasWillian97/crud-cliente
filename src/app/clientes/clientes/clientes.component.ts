import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService,
    private router: Router){

  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.clientesService.getAll().subscribe(retorno => this.clientes = retorno);
  }

  delete(cliente: Cliente){
    return this.clientesService.delte(cliente.id).subscribe(retorno => retorno);
  }



}
