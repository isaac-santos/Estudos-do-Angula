import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente12.component.html',
  styleUrl: './meu-componente12.component.css'
})
export class MeuComponente12Component {

  // Texto
  nome:string = 'Isaac';

  // Objeto
  obj:any = {'nome': 'Isaac', 'idade': 27};
}
