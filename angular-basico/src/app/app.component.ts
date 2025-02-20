import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuComponente02Component } from './meu-componente02/meu-componente02.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuComponenteComponent, MeuComponente02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
