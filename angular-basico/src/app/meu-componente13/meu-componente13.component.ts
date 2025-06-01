import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { finalize  } from 'rxjs/operators';

@Component({
  selector: 'app-meu-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './meu-componente13.component.html',
  styleUrl: './meu-componente13.component.css'
})
export class MeuComponente13Component {

  // Vetor
  vetor:Produto[] = [];

  // Vetor filtrado
  vetorFiltrado: Produto[] = [];

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Variável para guardar o texto (pratica)
  textoBusca: string = '';

  // Novo: Flag de carregamento
  loading: boolean = true; // Inicia como true para mostrar "Carregando..."

  // Objeto de formulário
  formulario = new FormGroup({
    id:    new FormControl(null),
    nome:  new FormControl(null),
    valor: new FormControl(null)
  });

  // Construtor
  constructor(private servico:ProdutoService){}

  // Inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  // Método para selecionar todos os produtos
  selecionar(){
    this.loading = true; // IInicia o carregamento
    this.servico.selecionar()
    .pipe(
      finalize(() => this.loading = false) // Garante que loading seja false no final (sucesso ou erro)
    )
    .subscribe(retorno => {
      this.vetor = retorno;
      this.filtrarProdutos(); // Inicializa o vetor filtrado
    });
  }

  // Método para cadastrar produtos
  cadastrar(){
    // Método para não gerar duplicidade (PRÁTICA)
      const nomeProduto = this.formulario.value.nome;

      const produtoExiste = this.vetor.some(existe => {
        // Compare o nome do produto existente (existe.nome)
        // com o nome que você quer cadastrar (nomeProduto)
        // converter para minúsculas para uma comparação case-insensitive
        return existe.nome?.toLowerCase() === nomeProduto?.toLowerCase();
      })
    
      if (produtoExiste) {
        alert('Este produto já está cadastrado!')
        return;
      }
    
    // Cadastrar
    this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset()
    })
  }

  // Método para selecionar um produto
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id : this.vetor[indice].id,
      nome : this.vetor[indice].nome,
      valor : this.vetor[indice].valor
    })

    this.btnCadastrar = false;

  }

  // Método para alterar produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {

      // Obter o índice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      // Alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      // Limpar o formulário
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    })
  }

  // Método para remover produtos
  remover(){
    
    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {

      // Obter o índice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      //Remover objeto do vetor
      this.vetor.splice(indiceRemovido, 1);

      // Limpar o formulário
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    });
  }

  // Método para filtrar produtos
  filtrarProdutos(): void {
    
    if (this.textoBusca.trim() === '') {
      // Se o campo de busca estiver vazio, exiba todos os produtos
      this.vetorFiltrado = [...this.vetor];// Cria copia para exibição
    } else {
      // Filtra o vetor com base no nome
      this.vetorFiltrado = this.vetor.filter(produto =>
        produto.nome?.toLowerCase().includes(this.textoBusca.trim().toLowerCase())
      )
    }
  }
  
  // Limpar a busca
  limparBusca(): void {
    this.textoBusca = ''; // Limpa o termo de busca
    this.filtrarProdutos(); // Chama o método de filtro para exibir todos os produtos
  }

  


}
