import { TestBed } from '@angular/core/testing';

import { orderService } from './orderService';

describe('CartsInLService', () => {
  let service: orderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(orderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
