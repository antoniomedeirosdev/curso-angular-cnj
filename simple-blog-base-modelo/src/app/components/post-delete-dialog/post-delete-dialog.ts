import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'


@Component({
  selector: 'app-post-delete-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './post-delete-dialog.html',
  styleUrl: './post-delete-dialog.css'
})
export class PostDeleteDialog {

}
