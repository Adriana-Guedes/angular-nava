import { ProfessoresModel } from './professores.models';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  // httpClient é um serviço angular que permite acessar endereços REST
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ProfessoresModel[]>('http://localhost:8080/professores');
  }

  save(professorObj : ProfessoresModel) {
    return this.httpClient.post<ProfessoresModel>('http://localhost:8080/professores', professorObj);
  }

  delete(id : number) {
    return this.httpClient.delete(`http://localhost:8080/professores/${id}`);
  }

  getOne(id : number) {
    return this.httpClient.get<ProfessoresModel>(`http://localhost:8080/professores/${id}`);
  }

  update(id : number, professorObj:ProfessoresModel) {
    return this.httpClient.patch<ProfessoresModel>(`http://localhost:8080/professores/${id}`, professorObj);
}
}
