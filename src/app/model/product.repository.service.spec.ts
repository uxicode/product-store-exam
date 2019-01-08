import { TestBed, inject } from '@angular/core/testing';

import { Product.RepositoryService } from './product.repository.service';

describe('Product.RepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product.RepositoryService]
    });
  });

  it('should be created', inject([Product.RepositoryService], (service: Product.RepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
