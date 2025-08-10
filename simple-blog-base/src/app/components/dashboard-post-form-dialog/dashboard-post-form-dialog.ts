import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-dashboard-post-form-dialog',
  imports: [FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './dashboard-post-form-dialog.html',
  styleUrl: './dashboard-post-form-dialog.css'
})
export class DashboardPostFormDialog {

  onSubmit(postForm: NgForm) {
    const author = postForm.form.value.author;
    const title = postForm.form.value.title;
    const date = postForm.form.value.date;
    const content = postForm.form.value.content;

    console.log(`${author} ${title} ${date} ${content}`)
  }

}
