import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente04.component.html',
  styleUrl: './meu-componente04.component.css'
})
export class MeuComponente04Component {

  // Vetor de nomes
  nomes:string[] = ['Ariane', 'Bruna', 'Caio', 'Denis'];
  
}
