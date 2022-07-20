import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationService extends BaseService {

  url = this.domain + 'api/web/Destinations';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }


  /**
   * Lấy về danh sách các điểm đến
   *
   * @returns {Observable<any>}
   * @memberof DestinationService
   */
  getList(): Observable<any> {
    return this.http.get(`${this.url}/${this.lang}/lang`);
  }

  getByPath(path: string): Observable<any> {
    return this.http.get(`${this.url}/${path}/${this.lang}`);
  }

  
}
