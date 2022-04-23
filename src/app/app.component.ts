import { Component, OnInit } from '@angular/core';
import { GridService } from './services/grid/grid.service';
import { GridItemModel } from './models/grid-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfiguration } from 'src/assets/config';

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
  constructor(private grid: GridService, private snack: MatSnackBar) {
    this.rows = AppConfiguration.rows;
    this.columns = AppConfiguration.columns;
  }

  ngOnInit(): void {
    this.grid.getAllPosts().subscribe({
      next: ((res: any) => {
        this.posts = res;
        this.setState();
      }).bind(this),
      error: ((error: any) => {
        this.snack.open(error, 'close');
      }).bind(this),
    });
  }

  setState(){
    this.posts.forEach(post=>{
      post.clicked = false;
    })
  }

  tileClicked(item: GridItemModel) {
    item.clicked = !item.clicked;
  }
}
