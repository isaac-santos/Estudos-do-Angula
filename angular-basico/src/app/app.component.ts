import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuComponente02Component } from './meu-componente02/meu-componente02.component';
import { MeuComponente03Component } from './meu-componente03/meu-componente03.component';
import { MeuComponente04Component } from './meu-componente04/meu-componente04.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuComponenteComponent, MeuComponente02Component, MeuComponente03Component, MeuComponente04Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
