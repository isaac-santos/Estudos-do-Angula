import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangerlogComponent } from './changerlog/changerlog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChangerlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Focus';
}
