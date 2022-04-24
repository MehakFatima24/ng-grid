import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let injector: TestBed;
  let http: HttpService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();

    injector = getTestBed();
    service = injector.get<HttpService>(HttpService as Type<HttpService>);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http post when post is called', () => {
    spyOn(service.http, 'post');
    service.post('http://test.com', '');
    expect(service.http.post).toHaveBeenCalled();
  });

  it('should call http delete when delete is called', () => {
    spyOn(service.http, 'delete');
    service.delete('http://test.com');
    expect(service.http.delete).toHaveBeenCalled();
  });

  it('should call http post when put is called', () => {
    spyOn(service.http, 'post');
    service.put('http://test.com', '');
    expect(service.http.post).toHaveBeenCalled();
  });
  it('should call http patch when patch is called', () => {
    spyOn(service.http, 'patch');
    service.patch('http://test.com', '');
    expect(service.http.patch).toHaveBeenCalled();
  });
});
