import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente05.component.html',
  styleUrl: './meu-componente05.component.css'
})
export class MeuComponente05Component {
  
  
  // Vetor de nomes
  nomes:string[] = ['Ariane', 'Bruna', 'Caio', 'Denis'];
}
