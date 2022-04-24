import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpService) { }

  /**
   * This method fetches all the posts from the back-end.
   * 
   * @returns observable
   */
  getAllPosts() {
    return this.http.get("/posts");
  }
}
