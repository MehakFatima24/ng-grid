import { Component, OnInit } from '@angular/core';
import { GridService } from './services/grid/grid.service';
import { GridItemModel } from './models/grid-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfiguration } from 'src/assets/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'grid-app';
  posts: GridItemModel[] = [];
  rows: number = 0;
  columns: number = 0;
  subscriptions: Subscription[] = [];
  constructor(public grid: GridService, public snack: MatSnackBar) {
    this.rows = AppConfiguration.rows;
    this.columns = AppConfiguration.columns;
  }
  /**
   * This hook is called when the component is initialized.
   *
   * It fetches the posts and renders them, and displays the error in case request fails.
   */
  ngOnInit(): void {
    this.subscriptions.push(
      this.grid.getAllPosts().subscribe({
        next: ((res: any) => {
          this.posts = res;
        }).bind(this),
        error: ((error: any) => {
          this.snack.open(error.message, 'close');
        }).bind(this),
      })
    );
  }

  /**
   * This hook is called when the component is destroyed, it unsubscribes to the observer to avoid any memory leaks.
   */
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
