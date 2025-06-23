import { Component } from '@angular/core';
import { MeuComponente15FormularioComponent } from '../meu-componente15-formulario/meu-componente15-formulario.component';
import { MeuComponente15TabelaComponent } from '../meu-componente15-tabela/meu-componente15-tabela.component';

@Component({
  selector: 'app-meu-componente15',
  standalone: true,
  imports: [MeuComponente15FormularioComponent, MeuComponente15TabelaComponent],
  templateUrl: './meu-componente15.component.html',
  styleUrls: ['./meu-componente15.component.css']
})
export class MeuComponente15Component {


  // Vetor
  menu:string[] = ['arroz com feijão', 'lasanha', 'pirão de aimpim', 'ensopado'];

  //Função para cadastrar comidas
  cadastrar(nome:string)/*<--parâmetro para cadastrar*/{
    // aqui devo fazer refência ao meu vetor de menu
    this.menu.push(nome);// utiliza o push para adicionar dados ao vetor
  }
}
