import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TripService extends BaseService {

  url = this.domain + 'api/web/Trips';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * Lấy về danh sách các chuyến đi theo điểm đến
   *
   * @returns {Observable<any>}
   * @memberof DestinationService
   */
   getList(des: string): Observable<any> {
    return this.http.get(`${this.url}/${des}/des/${this.lang}/lang`);
  }

  getByPath(path: string): Observable<any> {
    return this.http.get(`${this.url}/${path}/${this.lang}`);
  }
  
}
