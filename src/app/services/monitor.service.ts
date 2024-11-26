import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monitor } from '../models/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  URL : string = 'http://localhost:8080/monitores';

  constructor(private HttpClient: HttpClient) { }

  inserir(monitor: Monitor): Observable<Monitor>{
    return this.HttpClient.post<Monitor>(this.URL, monitor)
  }
}

