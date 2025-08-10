import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog'
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
  constructor(
    private postService: PostService,
    private dialogRef: DialogRef<DashboardPostFormDialog>
  ){}

  postForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    date: new FormControl(DateTime.now(), Validators.required),
    content: new FormControl('', Validators.required)
  })

  onSubmit() {
    const author = this.postForm.value.author!!
    const title = this.postForm.value.title!!
    const date = this.postForm.value.date!!
    const content = this.postForm.value.content!!
    
    const post = new Post(uuidv4(), author, title, date, content)
    this.postService.createPost(post)

    console.log(this.postForm.value)
    this.dialogRef.close()
  }
}
