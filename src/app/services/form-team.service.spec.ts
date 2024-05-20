import { TestBed } from '@angular/core/testing';

import { FormTeamService } from './form-team.service';

describe('FormTeamService', () => {
  let service: FormTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
