import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {

  url = this.domain + 'api/web/Blog';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }


  /**
   * Lấy về danh sách các blog
   *
   * @returns {Observable<any>}
   * @memberof BlogService
   */
  getList(): Observable<any> {
    return this.http.get(`${this.url}/${this.lang}/lang`);
  }

  getByPath(path: string): Observable<any> {
    return this.http.get(`${this.url}/${path}/${this.lang}`);
  }
}
