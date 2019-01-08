import { TestBed, inject } from '@angular/core/testing';

import { Static.DatasourceService } from './static.datasource.service';

describe('Static.DatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Static.DatasourceService]
    });
  });

  it('should be created', inject([Static.DatasourceService], (service: Static.DatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
