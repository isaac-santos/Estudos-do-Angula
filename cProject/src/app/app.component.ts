import { Component, inject } from '@angular/core';
import { UpdateComponent } from './update/update.component'
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpdateComponent, MatMenuModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cProject';

  //Dialog do profile
    readonly dialog = inject(MatDialog);

    openDialog():void {
      let dialogRef = this.dialog.open(ProfileDialogComponent, {
        height: '400px',
        width: '600px',

      });
    }
  //Novidades
    notificationCount = 15;

    // aplicar efeito com CSS
    get hasNotifications(): boolean {
      return this.notificationCount > 0;
    }
  //
}
