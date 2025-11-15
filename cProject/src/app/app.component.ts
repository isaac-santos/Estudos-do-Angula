import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cProject';

  readonly dialog = inject(MatDialog);

  openDialog():void{
    let dialogRef = this.dialog.open(ProfileDialogComponent, {
      height: '400px',
      width: '600px',

    });
  }
}
