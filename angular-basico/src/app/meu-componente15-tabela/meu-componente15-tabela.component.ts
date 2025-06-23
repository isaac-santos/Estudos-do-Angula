import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meu-componente15-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente15-tabela.component.html',
  styleUrls:['./meu-componente15-tabela.component.css']
})
export class MeuComponente15TabelaComponent {

  @Input() vetor:string[] = [];
}
