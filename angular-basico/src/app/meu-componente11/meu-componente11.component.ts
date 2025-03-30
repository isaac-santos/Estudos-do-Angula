import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-meu-componente11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './meu-componente11.component.html',
  styleUrl: './meu-componente11.component.css'
})
export class MeuComponente11Component {
  
  // Objeto de formulário
  formulario = new FormGroup({
    nome   : new FormControl('', [Validators.required,   Validators.minLength(3)]),
    idade  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required,   Validators.minLength(3)])
  });

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Vetor de pessoas
  vetor:Pessoa[] = [];

  // Função de cadastro
  cadastrar(){

    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();
    
    // Visualização via console
    // console.table(this.vetor);

  }

}
