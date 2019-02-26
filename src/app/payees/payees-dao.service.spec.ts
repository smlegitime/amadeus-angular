import { TestBed } from '@angular/core/testing';

import { PayeesDaoService } from './payees-dao.service';

describe('PayeesDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayeesDaoService = TestBed.get(PayeesDaoService);
    expect(service).toBeTruthy();
  });
});
