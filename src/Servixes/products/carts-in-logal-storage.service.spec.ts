import { TestBed } from '@angular/core/testing';

import { CartsInLogalStorageService } from './carts-in-logal-storage.service';

describe('CartsInLogalStorageService', () => {
  let service: CartsInLogalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartsInLogalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
