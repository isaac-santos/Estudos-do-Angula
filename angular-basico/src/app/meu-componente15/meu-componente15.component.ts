import { Component } from '@angular/core';
import { MeuComponente15FormularioComponent } from '../meu-componente15-formulario/meu-componente15-formulario.component';
import { MeuComponente15TabelaComponent } from '../meu-componente15-tabela/meu-componente15-tabela.component';

@Component({
  selector: 'app-meu-componente15',
  standalone: true,
  imports: [MeuComponente15FormularioComponent, MeuComponente15TabelaComponent],
  templateUrl: './meu-componente15.component.html',
  styleUrl: './meu-componente15.component.css'
})
export class MeuComponente15Component {

}
