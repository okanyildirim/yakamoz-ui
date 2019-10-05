import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  cmsBaseUrl = environment.CMS_HOST + 'contents/';
  constructor(private http: HttpClient) { }

  getContents(): Observable<any> {
    return this.http.get(this.cmsBaseUrl );
  }
}
