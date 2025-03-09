import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente08.component.html',
  styleUrl: './meu-componente08.component.css'
})
export class MeuComponente08Component {
  
  // Variável de média
  media:number = 8;

  // Vetor
  nomes:string [] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  // Linguagem
  linguagem:string='HTML';

  //Pratica
  resultado:string = 'Em exame';
  aluno = [
  {
    nome: 'Jessica',
    genero: 'F',
    nota: 4
  },
  {
    nome: 'Erick',
    genero: 'M',
    nota: 5
  },
];
}
