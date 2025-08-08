import { Component } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { Post } from '../../models/post';

@Component({
  selector: 'app-dashboard-post-tab',
  imports: [MatTableModule],
  templateUrl: './dashboard-post-tab.html',
  styleUrl: './dashboard-post-tab.css',
})
export class DashboardPostTab {
  posts: Post[] = [];
}
