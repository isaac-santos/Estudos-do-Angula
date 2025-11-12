import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cProject';

  readonly dialog = inject(MatDialog);

  openDialog():void{
    this.dialog.open(ProfileDialogComponent);
  }
}
