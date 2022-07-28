import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { NewsletterService } from '../service/newsletter.service';
import { ContactService } from '../service/contact.service';

/**
 * Trang bản tin
 *
 * @export
 * @class NewsletterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  news: any;
  contact: Contact = new Contact;
  constructor(public newsletterService: NewsletterService, public contactService: ContactService) { }

  ngOnInit(): void {
    this.getContent();
  }
  getContent(){
    this.newsletterService.getContent().subscribe((data: any) =>{
      this.news = data;
    })
  }
  subscribe(){
    this.contactService.subscribe(this.contact).subscribe((data: any)=>{
      console.log(data);
      this.contact = new Contact();
    })
  }
}
