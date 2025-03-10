import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meu-componente09',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meu-componente09.component.html',
  styleUrl: './meu-componente09.component.css'
})
export class MeuComponente09Component {

  nome:string='';
  cidade:string='';

}
