import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpService) { }

  getAllPosts() {
    return this.http.get("/posts");
  }
}
