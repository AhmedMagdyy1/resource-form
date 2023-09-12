import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resources-app';
  constructor(private translate: TranslateService) {
    // Set the default language
    translate.setDefaultLang('en');
  }

  switchLanguage(language: any) {
    this.translate.use(language.target.value);
  }
}
