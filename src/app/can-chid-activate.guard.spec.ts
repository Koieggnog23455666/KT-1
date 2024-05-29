import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canChidActivateGuard } from './can-chid-activate.guard';

describe('canChidActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canChidActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
