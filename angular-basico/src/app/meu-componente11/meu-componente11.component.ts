import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

}
