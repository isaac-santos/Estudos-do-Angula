import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente02',
  standalone: true,
  imports: [],
  templateUrl: './meu-componente02.component.html',
  styleUrl: './meu-componente02.component.css'
})
export class MeuComponente02Component {
  mensagem(){
    alert('Ola mundo!')
  }
}
