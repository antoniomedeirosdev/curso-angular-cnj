import { Component } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-dashboard-post-form-dialog',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './dashboard-post-form-dialog.html',
  styleUrl: './dashboard-post-form-dialog.css'
})
export class DashboardPostFormDialog {

}
