import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { StateManagementService } from 'src/app/services/state-mangmenent.service';
import { ResourceAvailability } from '../resources.model';

@Component({
  selector: 'app-resource-availability',
  templateUrl: './resource-availability.component.html',
  styleUrls: ['./resource-availability.component.css']
})
export class ResourceAvailabilityComponent {
  myForm: FormGroup;
  @Input() isArabic?: boolean;
  months:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]

  minutes:number = 30 

  selectedRadioValue: number = 1;
  selectedPersonValue:number = 1

  constructor(private translate: TranslateService,private fb: FormBuilder,private stateManagement:StateManagementService) {
    // Set the default language
    translate.setDefaultLang('en');
    this.myForm = this.fb.group({
      resourcesAvailableTo: [''], 
      month: [''],
      selectedRadioValue: [''],
      minutes: [0],
      selectedPersonValue: [''],
      numberOfPeople: [''], 
    });

    this.myForm.valueChanges.subscribe((formValues:ResourceAvailability) => {
      this.stateManagement.setResourceAvailability(formValues)
    });
  }


  switchLanguage(language: any) {
    this.translate.use(language.target.value);
  }

  radioValueChanged(value: number) {
    this.selectedRadioValue = value;
    this.myForm.patchValue({
      resourcesTime: value === 1, 
    });
  }
  personChangeValue(value:number){
    this.selectedPersonValue = value
    this.myForm.patchValue({
      typeOfReservation: value === 1 ? false : true, 
    });
  }
  increment(){
    this.minutes += 30 
    this.myForm.get('minutes')?.setValue(this.minutes)
  }
  decrement(){
    if(this.minutes >= 30){
      this.minutes -= 30
    }
    this.myForm.get('minutes')?.setValue(this.minutes)
  }
}
