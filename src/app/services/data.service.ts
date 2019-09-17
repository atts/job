import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getJobsFromApi<T>(): Observable<T> {
    const url = environment.apiRootUrl + '/jobs.json';
    return this.httpClient.get<T>(url);
  }
}
