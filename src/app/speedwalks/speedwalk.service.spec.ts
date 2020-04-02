import { TestBed } from '@angular/core/testing';

import { SpeedwalkService } from './speedwalk.service';

describe('SpeedwalkService', () => {
  let service: SpeedwalkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedwalkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
