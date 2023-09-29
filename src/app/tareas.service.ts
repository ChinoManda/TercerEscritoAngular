import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(private http: HttpClient) { }

  obtenerTareas() {
    const apiUrl = 'http://localhost:8000/api/v1/tarea'; 
    return this.http.get(apiUrl);
  }
}
