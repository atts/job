import { DataService } from './data.service';
import { of } from 'rxjs';

describe ('DataService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dataService: DataService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    dataService = new DataService(httpClientSpy as any);
  });

  it('should call the API', () => {
    const expectedData: any[] =
      [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(of(expectedData));

    dataService.getJobsFromApi();
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
