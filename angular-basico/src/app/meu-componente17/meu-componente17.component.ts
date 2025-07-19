import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente17',
  standalone: true,
  imports: [],
  templateUrl: './meu-componente17.component.html',
  styleUrl: './meu-componente17.component.css'
})
export class MeuComponente17Component {

  // Variável nome
  nome:string = 'Isaac';

  // Variável média
  media:number = 0;

  // Função para calcular a média
  calculo(n1:number, n2:number){
    return (n1+n2)/2;
  }

}
