import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogHomeService extends BaseService {

  url = this.domain + 'api/web/BlogGeneral';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }
  getInfo(): Observable<any> {
    return this.http.get(`${this.url}/${this.lang}`);
  }
}
