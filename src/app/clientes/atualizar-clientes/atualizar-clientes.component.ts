import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-atualizar-clientes',
  templateUrl: './atualizar-clientes.component.html',
  styleUrls: ['./atualizar-clientes.component.scss']
})
export class AtualizarClientesComponent {

  form!: FormGroup;
  submitted: boolean = false;
  cliente?: Cliente;

  constructor(private clientesService: ClientesService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder){
  }

  ngOnInit():void{
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      city: ['', Validators.required]
    })
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.clientesService.getById(id).subscribe(cliente => this.cliente = cliente)
    
  } 
  
  update(cliente: Cliente){
    this.form.patchValue({
      id: cliente.id,
      name: cliente.name,
      age: cliente.age,
      city: cliente.city
    })
  }



  onSubmit(){
    if(this.form.valid){
      this.submitted = true;

      this.clientesService.updateClient(this.cliente!).subscribe(retorno => this.cliente = retorno);
    }
    this.router.navigate(['clientes'])
  }

}
