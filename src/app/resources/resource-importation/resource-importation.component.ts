import { Component, ViewChild,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { StateManagementService } from 'src/app/services/state-mangmenent.service';

@Component({
  selector: 'app-resource-importation',
  templateUrl: './resource-importation.component.html',
  styleUrls: ['./resource-importation.component.css']
})
export class ResourceImportationComponent {
  resourceImportationForm: FormGroup;

  @ViewChild('fileInput') fileInput: any;
  @Input() isArabic?: boolean;
  imageSrc: string | ArrayBuffer | null = '../../../assets/testi-2.jpg';

  constructor(private translate: TranslateService,private fb: FormBuilder,private stateManagement:StateManagementService) {
    // Set the default language
    translate.setDefaultLang('en');
    this.resourceImportationForm = this.fb.group({
      imgUrl: ['../../../assets//12.jpg'], 
      resourceName: [''],
    });
    this.resourceImportationForm.valueChanges.subscribe((formValues) => {
      this.stateManagement.setUserInfoForm(formValues)

    });
  }

  switchLanguage(language: any) {
    this.translate.use(language.target.value);
  }

//  To update the img
 onFileSelected(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.resourceImportationForm.patchValue({ imgUrl: e.target.result });
  };
  reader.readAsDataURL(file);
}

}
