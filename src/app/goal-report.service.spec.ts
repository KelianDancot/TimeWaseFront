import { TestBed } from '@angular/core/testing';

import { GoalReportService } from './goal-report.service';

describe('GoalReportService', () => {
  let service: GoalReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
