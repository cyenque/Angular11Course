import { TestBed } from '@angular/core/testing';

import { TestAngularService } from './test-angular.service';

describe('TestAngularService', () => {
  let service: TestAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
