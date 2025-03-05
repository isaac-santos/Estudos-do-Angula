import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente07.component.html',
  styleUrl: './meu-componente07.component.css'
})
export class MeuComponente07Component {
  
  //Variável lógica
  condicao:boolean = true;

  // Lista de aprovados e reprovados
  lista:string[] = ['Aprovado', 'Aprovado', 'Reprovado'];
  

}
