import { TestBed } from '@angular/core/testing';

import { StringHelperService } from './string-helper.service';

describe('StringHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringHelperService = TestBed.get(StringHelperService);
    expect(service).toBeTruthy();
  });
});
