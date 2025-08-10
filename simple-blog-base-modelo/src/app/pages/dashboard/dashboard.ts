import { Component } from '@angular/core';

import { DashboardUserTab } from '../../components/dashboard-user-tab/dashboard-user-tab';
import { DashboardPostTab } from '../../components/dashboard-post-tab/dashboard-post-tab';

import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-dashboard',
  imports: [MatTabsModule, DashboardUserTab, DashboardPostTab],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
