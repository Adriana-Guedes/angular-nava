// SERVIÇOS, RESPONSAVEL POR CHAMAR A API


import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'


@Injectable({
  providedIn: 'root'
})



export class ProfessoresService {

  //TRAZ TODOS OS VERBOS
  constructor(private httpClient: HttpClient) { }


  //VERBO GETALL
  getAll(){

    return this.httpClient.get('http://localhost:8080/professores');

  }

  save(professorObj : any){
    return this.httpClient.post('http://localhost:8080/professores', professorObj);
  }

  delete(id : number){
    //return this.httpClient.delete('http://localhost:8080/professores/' + id);
                                      //Ou
    return this.httpClient.delete(`http://localhost:8080/professores/${id}`);
  }
}
