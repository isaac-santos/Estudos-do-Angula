import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewsDialogComponent } from '../../news-dialog/news-dialog.component';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  readonly dialog = inject(MatDialog);

  openDialog():void {
    let dialogRef = this.dialog.open(NewsDialogComponent, {
      height: '400px',
      width: '600px',

    });
  }
}
