import { Component } from '@angular/core';

import { Post } from '../../models/post';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DashboardPostFormDialog } from '../dashboard-post-form-dialog/dashboard-post-form-dialog';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-dashboard-post-tab',
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard-post-tab.html',
  styleUrl: './dashboard-post-tab.css',
})
export class DashboardPostTab {
  constructor(private dialog: MatDialog, private postService: PostService){}

  posts: Post[] = [];
  displayedHeaders = ["id", "author", "title", "date", "edit", "delete"];

  ngOnInit() {
    this.loadPosts()
  }

  openNewPostFormDialog() {
    const dialogRef = this.dialog.open(DashboardPostFormDialog);
    dialogRef.afterClosed().subscribe((result) => {
      this.loadPosts()
      console.log(result)
    });
  }

  openEditPostFormDialog(id: string) {
    const dialogRef = this.dialog.open(DashboardPostFormDialog, {
      data: { id }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.loadPosts()
      console.log(result)
    });
  }

  loadPosts() {
    this.postService.findAll().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
