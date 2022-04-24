import { Injectable, OnDestroy } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { GridItem } from 'src/app/models/grid-item.model';
@Injectable({
  providedIn: 'root'
})
export class GridService implements OnDestroy {

  constructor(private http: HttpService) { }
  private subscription: Subscription = new Subscription;
  private $posts = new BehaviorSubject<GridItem[]>([]);
  /**
   * This method loads all the posts from the back-end.
   * 
   * @returns observable
   */
  init() {
    this. subscription = this.http.get("/posts").subscribe(($posts: any)=>{
      this.$posts.next($posts);
    });
    return this.subscription;
  }

  /**
   * This method returns the stream of posts.
   * 
   * @returns Observable
   */
  public getAllPosts(): Observable<GridItem[]> {
    return this.$posts;
  } 

  /**
   * This hook is triggered when the service is destroyed, it unsubscribes to all the subscriptions 
   * to avoid memory leaks.
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
