import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UsercontrolModule } from 'src/app/shared/user-controls/usercontrol.module';
import { DataService } from 'src/app/services/data.service';
import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class FakeDataService {
  getJobsFromApi(): Observable<any> {
    return of(
      {
        Job: 'Job'
      }
    );
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let fakeDataService: FakeDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        MaterialModule,
        UsercontrolModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: DataService, useClass: FakeDataService },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    fakeDataService = fixture.debugElement.injector.get(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On Component Initialized', () => {
    it('should Call the API', () => {
      spyOn(fakeDataService, 'getJobsFromApi').and.returnValue(of('error'));
      component.ngOnInit();
      expect(fakeDataService.getJobsFromApi).toHaveBeenCalled();
    });
  });
});
