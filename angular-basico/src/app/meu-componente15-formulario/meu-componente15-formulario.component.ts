import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-componente15-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './meu-componente15-formulario.component.html',
  styleUrl: './meu-componente15-formulario.component.css'
})
export class MeuComponente15FormularioComponent {

  // Variável para cadastrar nome do prato
  menu:string = '';

  // Output
  @Output() funcao = new EventEmitter<string>(); // dentro do maior e menor vamos passar o tipo de parâmetro que função precisa

  // Função de cadastro do componente de formulário
  cadastrarPrato(){
    // aqui utilizamos a função criada no componente html
    this.funcao.emit(this.menu);

    
  }
}
