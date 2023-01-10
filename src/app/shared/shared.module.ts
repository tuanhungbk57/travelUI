import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { I18nModule } from '../i18n/i18n.module';
import { BannerComponent } from './banner/banner.component';
import { DestinationImgComponent } from './destination-img/destination-img.component';
import { ImgZoomComponent } from './img-zoom/img-zoom.component';
import { SupportBannerComponent } from './support-banner/support-banner.component';
import { ImgBoxComponent } from './img-box/img-box.component';
import { RouterModule } from '@angular/router';
import { ImgRBoxComponent } from './img-r-box/img-r-box.component';
import { FooterService } from '../service/footer.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectLanguageComponent,
    BannerComponent,
    DestinationImgComponent,
    ImgZoomComponent,
    SupportBannerComponent,
    ImgBoxComponent,
    ImgRBoxComponent,
  ],
  imports: [
    CommonModule,
    I18nModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    DestinationImgComponent,
    SelectLanguageComponent,
    ImgZoomComponent,
    ImgBoxComponent,
    SupportBannerComponent,
    ImgRBoxComponent,
    I18nModule
  ],
  providers:[FooterService]
})
export class SharedModule { }
