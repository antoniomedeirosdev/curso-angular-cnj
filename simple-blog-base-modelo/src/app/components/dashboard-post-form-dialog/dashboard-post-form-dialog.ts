import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogRef } from '@angular/cdk/dialog';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-dashboard-post-form-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  templateUrl: './dashboard-post-form-dialog.html',
  styleUrl: './dashboard-post-form-dialog.css'
})
export class DashboardPostFormDialog {
  formTitle = 'Nova Postagem'
  submitButtonLabel = 'Salvar'

  postForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl(DateTime.now(), Validators.required),
    content: new FormControl('', Validators.required)
  })

  constructor(
    private postService: PostService,
    private dialogRef: DialogRef<DashboardPostFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ){}

  ngOnInit() {
    if (this.data) {
      console.log(this.data)
      this.formTitle = 'Editar postagem'
      this.submitButtonLabel = 'Editar'
      this.postService.findPostById(this.data.id).subscribe((post) => {
        this.postForm.setValue({
          author: post.author,
          date: post.date,
          title: post.title,
          content: post.content
        });
      });
    }
  }

  onSubmit() {
    const author = this.postForm.value.author!!
    const title = this.postForm.value.title!!
    const date = this.postForm.value.date!!
    const content = this.postForm.value.content!!

    if (this.data) {
      const post = new Post(this.data.id, author, title, date, content)
      this.postService.updatePost(post).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      const post = new Post(uuidv4(), author, title, date, content)
      this.postService.createPost(post).subscribe(() => {
        this.dialogRef.close();
      });
    }
    
    
  }
}
