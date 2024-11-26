import { Injectable } from '@angular/core';
import { Conexao } from './../models/conexao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {
  URL : string = 'http://localhost:8080/conexoes';

  constructor(private httpClient: HttpClient) {}

      buscarConexao(): Observable<Conexao[]>{
        return this.httpClient.get<Conexao[]>(this.URL)
    }
    ContarConexoes(convert: any): number{
      convert = Number(this.ContarConexoes)
      return convert;
    }
}
