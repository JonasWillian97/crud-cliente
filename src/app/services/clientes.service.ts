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

   getById(id: number):Observable <Cliente> {
    return this.http.get<Cliente>(`${this.url}/${id}`);
   }

   register(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}`, cliente);
   }

   update(cliente: Cliente):Observable <Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente)
   }
}
