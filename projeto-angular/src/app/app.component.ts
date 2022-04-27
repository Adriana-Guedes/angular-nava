import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-angular'; //VARIÁVEL GLOBAL
  empresa = 'NAVA'; //VARIÁVEL GLOBAL
 

  corFundo = 'background-color: yellow';



  //FUNÇÃO
getColor(){
  let color: String ='yellow' //VARIAVEL LOCAL PRECISA COLOCAR O LET + A TIPAGEM NESSE CASO STRING
  return color;
}


//EVENTOS ( EVENT BINDING)
clicar(){

alert("Botão Clicado") //caixa de mensagem que surte no topo após um evento

}


//EVENTOS ( EVENT BINDING) // CAPTURA O VALOR DIGITADO NO INPUT
getTextoDigitado(elemento:any){
  console.log(elemento.value)
  this.empresa = elemento.value //AQUI A VARIAVEL GLOBAL RECEBERA O VALOR DO INPUT
}

}
