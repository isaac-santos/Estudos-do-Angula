import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changerlog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './changerlog.component.html',
  styleUrl: './changerlog.component.scss'
})
export class ChangerlogComponent implements OnInit {

  today = new Date();

  newFunctions = [
    {      
      Date: '2025-03-03', condition: true, new: 'Adicionar serviços na marcação.'
    },
    {
      Date: '2025-02-20', condition: true, new: 'DePara.'
    }
  ]

  oldFunctions:{ Date: string; condition?: boolean; new: string }[] = [];

  constructor() {
    this.loadOldFunctions();
  }

  ngOnInit(): void {
    this.filterNewFunctions();
  }

  visto() {
    if (this.newFunctions.some(func => func.condition === true)) {
      // Mover itens com `condition: true` para `oldFunctions`
      this.oldFunctions = [...this.oldFunctions, ...this.newFunctions.filter(func => func.condition)];

      // Remover os itens já movidos da lista de novas funções
      this.newFunctions = this.newFunctions.filter(func => !func.condition);

      // Atualizar o localStorage
      localStorage.setItem('oldFunctions', JSON.stringify(this.oldFunctions));
    } else {
      alert('Não há novas implementações!')
    }
    
  }

  loadOldFunctions() {
    const storedOldFunctions = localStorage.getItem('oldFunctions');
    if (storedOldFunctions) {
      this.oldFunctions = JSON.parse(storedOldFunctions);
    }
  }

  filterNewFunctions() {
    // Remover do `newFunctions` os itens que já estão em `oldFunctions`
    this.newFunctions = this.newFunctions.filter(
      newFunc => !this.oldFunctions.some(oldFunc => oldFunc.Date === newFunc.Date && oldFunc.new === newFunc.new)
    );
  }
}
