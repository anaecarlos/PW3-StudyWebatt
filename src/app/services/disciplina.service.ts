import { Disciplina } from './../models/disciplina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  URL : string = 'http://localhost:8080/disciplinas'

  constructor(private httpClient: HttpClient) { }
  buscarDisciplinas(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(this.URL)
  }
}
