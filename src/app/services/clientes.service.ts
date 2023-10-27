import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = "http://localhost:3000/clientes";

  constructor(private http: HttpClient) {

   }

   getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
   }
}
