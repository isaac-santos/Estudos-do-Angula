import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-componente10',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './meu-componente10.component.html',
  styleUrl: './meu-componente10.component.css'
})
export class MeuComponente10Component {

  formulario = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl(''),
  });

}
