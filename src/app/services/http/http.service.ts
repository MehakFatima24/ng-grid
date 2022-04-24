import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(public http: HttpClient) {}
  get(url: any) {
    return this.http.get(environment.baseUrl + url);
  }
  post(url: any, body: any) {
    return this.http.post(environment.baseUrl + url, body);
  }
  put(url: any, body: any) {
    return this.http.post(environment.baseUrl + url, body);
  }
  patch(url: any, body: any) {
    return this.http.patch(environment.baseUrl + url, body);
  }
  delete(url: any) {
    return this.http.delete(environment.baseUrl + url);
  }
}
