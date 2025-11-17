import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponentComponent } from './home/main-layout-component/main-layout-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MainLayoutComponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cProject';

  
}
