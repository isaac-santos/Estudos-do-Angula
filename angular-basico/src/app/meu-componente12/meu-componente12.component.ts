import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from '../pipe/media.pipe';

@Component({
  selector: 'app-meu-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './meu-componente12.component.html',
  styleUrl: './meu-componente12.component.css'
})
export class MeuComponente12Component {

  // Texto
  nome:string = 'Isaac';

  // Objeto
  obj:any = {'nome': 'Isaac', 'idade': 27};

  // Vetor de objetos
  alunos:any = [
    {'nome':'Ana',     'nota1':8,   'nota2':9},
    {'nome':'Julio',   'nota1':7,   'nota2':8},
    {'nome':'Letícia', 'nota1':3,   'nota2':2},
    {'nome':'Ricardo', 'nota1':7,   'nota2':7}
  ];
  
}
