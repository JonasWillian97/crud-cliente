import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';

import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss']
})
export class CadastrarClientesComponent {

  form!: FormGroup;
  submitted: boolean = false;


  constructor(private clientesService: ClientesService, 
    private fb: FormBuilder,
    private router: Router){
   
  } 

  ngOnInit(){
   this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      city:['', Validators.required]
    })
  }

  get name(){
    return this.form.get("name")!;
  }

  get age(){
    return this.form.get("age")!;
  }

  get city(){
    return this.form.get("city")!;
  }

  register(){
    if(this.form.valid) {
      this.submitted = true;
      this.clientesService.register(this.form.value).subscribe(
        retorno => retorno
      )
      this.router.navigate(['clientes'])
    }
  }

}
