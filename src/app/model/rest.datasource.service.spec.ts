import { TestBed, inject } from '@angular/core/testing';

import { Rest.DatasourceService } from './rest.datasource.service';

describe('Rest.DatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Rest.DatasourceService]
    });
  });

  it('should be created', inject([Rest.DatasourceService], (service: Rest.DatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
