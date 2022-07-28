import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService extends BaseService {

  url = this.domain + 'api/web/Communication';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }

  getContent():Observable<any>{
    return this.http.get(`${this.url}/${this.lang}`);
  }

}
