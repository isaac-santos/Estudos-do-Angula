import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componentes
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  template: 
  `
    <h1>Curso de Angular</h1>
    <app-template-binding />
        
    
  `,
  // <div class="theme-red">
  // <app-new-component />
  // </div>
})
export class AppComponent {
  title = 'primeiro-projeto-latest';
}
