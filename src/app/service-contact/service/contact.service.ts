import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/service/base.service';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {

  url = this.domain + 'api/web/Contact';
  lang = this.getCurrentLang();
  constructor(http: HttpClient) {
    super(http);
  }
  submit(contact: Contact): Observable<any>{
    return this.http.post(this.url, contact);
  }
  subscribe(contact: Contact): Observable<any>{
    return this.http.post(`${this.url}/subscribe`, contact);
  }

  validate(contact: Contact){
    if(!contact.email){
      return false;
    }
    return true;
  }
}
