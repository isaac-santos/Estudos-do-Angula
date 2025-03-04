import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente06.component.html',
  styleUrl: './meu-componente06.component.css'
})
export class MeuComponente06Component {

  // Variável contendo uma linguagem (HTML, CSS, JS)
  linguagem:string = 'CSS';
}
