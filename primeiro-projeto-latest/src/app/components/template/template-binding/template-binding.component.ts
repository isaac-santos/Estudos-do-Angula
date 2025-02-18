import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Isaac de Jesus';
  public age = 27;
  public condition = this.age < 30 ? "novo" : "velho";
  
  public isDisabled = true;
  public srcValue = '';

  public isTextDecoration = this.age >= 27 ? 'underline' : 'none'

  public sum(val1:number, val2:number) {
    return val1 + val2;
  }
}
