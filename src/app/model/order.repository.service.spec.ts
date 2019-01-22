import { TestBed, inject } from '@angular/core/testing';

import { Order.RepositoryService } from './order.repository.service';

describe('Order.RepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Order.RepositoryService]
    });
  });

  it('should be created', inject([Order.RepositoryService], (service: Order.RepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
