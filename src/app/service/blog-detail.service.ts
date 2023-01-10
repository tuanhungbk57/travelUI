import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailService extends BaseService {

  url = this.domain + 'api/web/BlogDetail';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }
/**
   * Lấy về danh sách các điểm đến
   *
   * @returns {Observable<any>}
   * @memberof BlogDetailService
   */
 getList(blogstr: string): Observable<any> {
  return this.http.get(`${this.url}/${blogstr}/blog/${this.lang}/lang`);
}

getByPath(path: string): Observable<any> {
  return this.http.get(`${this.url}/${path}/${this.lang}`);
}

 
}
