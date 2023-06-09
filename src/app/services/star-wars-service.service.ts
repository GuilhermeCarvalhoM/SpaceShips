import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsServiceService {

  constructor(private http: HttpClient) {}

  enviarDadosFormulario(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/spaceships', data);
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
