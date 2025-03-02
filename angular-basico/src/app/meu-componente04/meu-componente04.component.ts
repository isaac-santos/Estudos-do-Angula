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

  // Variável para exibir ou ocultar o quadrado
  exibir:boolean = true;

  // Função para exibir ou ocultar o quadrado
  acao() {
    if(this.exibir === true) {
      this.exibir = false
    } else {
      this.exibir = true
    }
  }
}
