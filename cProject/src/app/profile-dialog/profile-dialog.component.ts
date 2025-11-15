import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-profile-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile-dialog.component.html',
  styleUrl: './profile-dialog.component.css'
})
export class ProfileDialogComponent {
  readonly panelOpenState = signal(false);
}
