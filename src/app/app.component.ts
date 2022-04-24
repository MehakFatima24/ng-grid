import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GridService } from './services/grid/grid.service';
import { GridItem } from './models/grid-item.model';
import { AppConfiguration } from 'src/assets/config';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NG Grid';
  public posts$: Observable<GridItem[]> | undefined;
  public columns: number = AppConfiguration.columns;
  subscriptions: Subscription[] = [];
  constructor(public grid: GridService ) {}
  /**
   * This hook is called when the component is initialized.
   *
   * It fetches the posts and renders them.
   */
  ngOnInit(): void {
    this.posts$ = this.grid.getAllPosts();
    this.grid.init();
  }


  /**
   * This method is used with *ngFor to track the data and avoid recreation of DOM.
   * 
   * @param index 
   * @param post 
   * @returns Post ID
   */
  trackByPostId(index: number, post: GridItem): number {
    return post.id;
  }
}
