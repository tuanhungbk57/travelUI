import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as nth from 'src/app/common/util'
@Component({
  selector: 'app-select-language',
  template: `
  <span>Language: </span>
  <select style="background-color:#c49651" #langSelect (change)="changedLanguage(langSelect.value)">
  <option
    *ngFor="let lang of a.langs"
    [value]="lang"
    [attr.selected]="lang === translate.currentLang ? '' : null"
  >{{lang}}</option>
</select>
  `,
  styles: [
    
  ]
})
export class SelectLanguageComponent implements OnInit {

  constructor(public translate: TranslateService) { }
  a = nth;
  ngOnInit(): void {
  }
  changedLanguage(lang: string){
    this.translate.use(lang);
    nth.setCurrentLanguage(lang);
    location.reload();
  }

}
