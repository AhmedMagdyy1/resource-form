import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  isLanguageArabic = new BehaviorSubject<boolean>(false)
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  setLanguage(language: string) {
    this.translate.use(language);
    if(language === 'ar'){
      this.setAppLanguage(true)
    } else {
      this.setAppLanguage(false)
    }
  }

  setAppLanguage(isArabic:boolean){
    this.isLanguageArabic.next(isArabic)
  }
}

