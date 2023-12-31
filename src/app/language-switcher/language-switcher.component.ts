import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls:['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  constructor(private translationService: TranslationService) {}

  switchLanguage(language: string) {
    this.translationService.setLanguage(language);
  }
}
