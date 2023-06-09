import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsServiceService {
  private apiUrl = 'http://localhost:3000/spaceships'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) {}

  enviarDadosFormulario(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  atualizarDados(data: any, index: number) {
    const apiUrl2 = 'http://localhost:3000/spaceships/' + index;
    return this.http.put(apiUrl2, data);
  }

  RemoverDados(data: any, index: number) {
    const apiUrl2 = 'http://localhost:3000/spaceships/' + index;
    return this.http.delete(apiUrl2, data);
  }

  public obterDadosById(index: number) {
    return this.http.get('http://localhost:3000/spaceships/' + index);
  }

  public obterDadosDaAPI() {
    return this.http.get('http://localhost:3000/spaceships');
  }
}
