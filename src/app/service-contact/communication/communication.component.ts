import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Contact } from '../model/contact';
import { CommunicationService } from '../service/communication.service';
import { ContactService } from '../service/contact.service';


/**
 * Trang để lai thông tin liên hệ đặt chỗ
 *
 * @export
 * @class CommunicationComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  contact: Contact = new Contact(); 
  com: any;
  isInvalid = false;
  constructor(public contactService: ContactService, public comService: CommunicationService,  public translate: TranslateService) { }

  ngOnInit(): void {
    this.getContent();
  }
  submit(){
    if(this.contactService.validate(this.contact)){
      this.contactService.submit(this.contact).subscribe((data: any) =>{
        this.contact = new Contact();
        console.log(data);;
        this.isInvalid = false;
        //todo điều hướng tới trang cảm ơn
        
      })
    }else{
      this.isInvalid = true;
    }
    
  }
  getContent(){
    this.comService.getContent().subscribe((data: any) =>{
      this.com = data;
    })
  }
}
