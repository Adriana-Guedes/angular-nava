import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  @Input()
  empresaFilho : string = '';

  //professores = [
   // { id : 1, nome: "Aninha", email: "anapj11@gmail.com" },
  //  { id : 2, nome: "Marilia", email: "marilia_gavioes@gmail.com" }
//  ];

  professores : any = [];

  //private activatedRoute : ActivatedRoute
  // modificador de acesso, nome da variável e Classe do objeto a ser injetado
  constructor(
    private activatedRoute: ActivatedRoute,
    private professorService: ProfessoresService
    ) {
    // this.activatedRoute = new ActivatedRoute();
  }

  ngOnInit(): void {

    this.getAll();
      this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  //ele deleta o id escolhido
  onDelete(id: number){
    this.professorService.delete(id)
      .subscribe(
        ()=>{
          console.log(`deletou registro com id ${id}`);
           //this.router.navigate(['/professores/#']);

          //depois para renovar o listar
          this.getAll();

        }
      );
  }


  private getAll(){

    this.professorService.getAll()
    .subscribe(
      (data) => {
        console.log(data);
        this.professores = data;
      }
    );

  }

}

