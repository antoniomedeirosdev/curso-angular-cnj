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

  author: string = '';
  title: string = '';
  date: string = '';
  content: string = '';

  ngOnInit() {
    // Pesquisar na API
    this.author = 'Bruno Lopes';
  }

  onSubmit(postForm: NgForm) {
    console.log(this.author);
    console.log(this.title);
    console.log(this.date);
    console.log(this.content);
  }

}
