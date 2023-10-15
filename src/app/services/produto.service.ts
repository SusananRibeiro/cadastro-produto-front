/*
  É nessa classe que fazemos o CRUD, ou seja, o GET, POST, PUT e DELETE do protocolo HTTP
*/
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/Produto';
import { enviroment } from 'src/env/env.dev';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private http: HttpClient = inject(HttpClient);

  // Método GET (READ)
  public get():Observable<Produto[]> {
    return this.http.get<Produto[]>(`${enviroment.URL_API}/produtos/carregue-produto`); 
  }

  // Método POST (CREATE)
  public save(produto: Produto, id: number = 0): Observable<Produto> {
    if(id > 0) {
      return this.http.put<Produto>(`${enviroment.URL_API}/produtos/atualize-produto/${id}`, produto);
    }
    return this.http.post<Produto>(`${enviroment.URL_API}/produtos/crie-produto`, produto);
  }

  public find(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${enviroment.URL_API}/produtos/carregue-produto/${id}`);
  }

  // Método DELETE (DELETE)
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${enviroment.URL_API}/produtos/delete-produto/${id}`);
  }
  
}
