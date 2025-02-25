import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meu-componente03',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './meu-componente03.component.html',
  styleUrl: './meu-componente03.component.css'
})
export class MeuComponente03Component {
  
  // Variável de imagem
  // imagem:string = './assets/dia.jpg';
  diaImg:string = './assets/dia.jpg';
  tardeImg:string = './assets/tarde.jpg';
  noiteImg:string = './assets/noite.jpg';
  atual = this.diaImg;

  trocar(){
    if(this.atual === this.diaImg) {
      this.atual = this.tardeImg;
    } else if(this.atual === this.tardeImg) {
      this.atual = this.noiteImg;
    } else {
      this.atual = this.diaImg;
    }
  }

}
