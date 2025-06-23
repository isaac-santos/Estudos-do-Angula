import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { MeuComponente02Component } from './meu-componente02/meu-componente02.component';
import { MeuComponente03Component } from './meu-componente03/meu-componente03.component';
import { MeuComponente04Component } from './meu-componente04/meu-componente04.component';
import { MeuComponente05Component } from './meu-componente05/meu-componente05.component';
import { MeuComponente06Component } from './meu-componente06/meu-componente06.component';
import { MeuComponente07Component } from './meu-componente07/meu-componente07.component';
import { MeuComponente08Component } from './meu-componente08/meu-componente08.component';
import { MeuComponente09Component } from './meu-componente09/meu-componente09.component';
import { MeuComponente10Component } from './meu-componente10/meu-componente10.component';
import { MeuComponente11Component } from './meu-componente11/meu-componente11.component';
import { MeuComponente12Component } from './meu-componente12/meu-componente12.component';
import { MeuComponente13Component } from './meu-componente13/meu-componente13.component';
import { MeuComponente14Component } from './meu-componente14/meu-componente14.component';
import { MeuComponente15Component } from './meu-componente15/meu-componente15.component';
import { MeuComponente16Component } from './meu-componente16/meu-componente16.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MeuComponenteComponent, MeuComponente02Component, MeuComponente03Component, MeuComponente04Component, MeuComponente05Component, MeuComponente06Component, MeuComponente07Component, MeuComponente08Component, MeuComponente09Component, MeuComponente10Component, MeuComponente11Component,
    MeuComponente12Component, MeuComponente13Component, MeuComponente14Component, MeuComponente15Component, MeuComponente16Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
