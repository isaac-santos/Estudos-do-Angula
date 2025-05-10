import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';

@Component({
  selector: 'app-meu-componente13',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente13.component.html',
  styleUrl: './meu-componente13.component.css'
})
export class MeuComponente13Component {

  // Vetor
  vetor:Produto[] = [];

  // Construtor
  constructor(private servico:ProdutoService){}

  // Inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  // Método para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

}
