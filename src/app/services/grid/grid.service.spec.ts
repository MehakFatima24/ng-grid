import { TestBed } from '@angular/core/testing';

import { GridService } from './grid.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { mockPostArray } from 'src/mocks/mock-posts';

describe('GridService', () => {
  let service: GridService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get All posts', () => {
    // service.getAllPosts().subscribe((res) => {
    //   expect(res).toEqual(mockPostArray);
    // });
  });
});
