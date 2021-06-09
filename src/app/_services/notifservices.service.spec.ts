import { TestBed } from '@angular/core/testing';

import { NotifservicesService } from './notifservices.service';

describe('NotifservicesService', () => {
  let service: NotifservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
