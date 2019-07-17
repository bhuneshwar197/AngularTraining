import { TestBed } from '@angular/core/testing';

import { FilterdataService } from './filterdata.service';

describe('FilterdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterdataService = TestBed.get(FilterdataService);
    expect(service).toBeTruthy();
  });
});
