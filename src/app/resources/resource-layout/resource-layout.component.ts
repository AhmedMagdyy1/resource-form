import { Component, OnInit, ViewChild,TemplateRef  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/services/translation.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StateManagementService } from 'src/app/services/state-mangmenent.service';
import { ResourceAvailability, ResourceImportation, WorkingDaysForm } from '../resources.model';


@Component({
  selector: 'app-resource-layout',
  templateUrl: './resource-layout.component.html',
  styleUrls: ['./resource-layout.component.css']
})
export class ResourceLayoutComponent implements OnInit {
  @ViewChild('myModalTemplate') myModalTemplate!: TemplateRef<any>;
  bsModalRef!: BsModalRef; 
  isArabic:boolean = false
  element: { isActive: boolean } = { isActive: false };
  resourceAvailability?:ResourceAvailability
  resourceImportation?:ResourceImportation
  resourceWeeklySchedule?:WorkingDaysForm

  constructor(private translate: TranslateService, private _Translation:TranslationService,private modalService: BsModalService,private _stateManagementService:StateManagementService) {
    // Set the default language
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.subscribeToLangauge()
  }

  switchLanguage(language: any) {
    this.translate.use(language.target.value);
  }

  toggleDialog(element: any, checkbox: HTMLInputElement) {
    element.isActive = !element.isActive;
    checkbox.checked = element.isActive;
  }

  subscribeToLangauge(){
    this._Translation.isLanguageArabic.subscribe(
      (isArabic)=>{
        this.isArabic = isArabic
    })
  }

  openModal() {
    this.getDataFromStateManagementService()
    this.bsModalRef = this.modalService.show(this.myModalTemplate); 
  }
  getDataFromStateManagementService() {
    this._stateManagementService.resourceAvailability.subscribe((res)=>{
      // console.log(res);
      this.resourceAvailability=res
      console.log(this.resourceAvailability);
      
    })
    this._stateManagementService.resourceInfoForm.subscribe((res)=>{
      this.resourceImportation=res
      console.log(this.resourceImportation);
    })
    this._stateManagementService.resourceWeeklySchedule.subscribe((res)=>{
      this.resourceWeeklySchedule=res
      console.log(this.resourceImportation);
    })
    
  }

  

  closeModal() {
    this.bsModalRef.hide();
  }
}
