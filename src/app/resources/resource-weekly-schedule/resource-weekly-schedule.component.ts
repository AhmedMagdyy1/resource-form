import { Component,Input,OnInit  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { StateManagementService } from 'src/app/services/state-mangmenent.service';

@Component({
  selector: 'app-resource-weekly-schedule',
  templateUrl: './resource-weekly-schedule.component.html',
  styleUrls: ['./resource-weekly-schedule.component.css']
})
export class ResourceWeeklyScheduleComponent   {
  @Input() isArabic?: boolean;
  workingDaysForm: FormGroup;
  showSlots: boolean[] = []; 
  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  



  element: { isActive: boolean } = { isActive: false };


  constructor(private translate: TranslateService,private fb: FormBuilder,private stateManagement:StateManagementService) {
    // Set the default language
    translate.setDefaultLang('en');
    this.workingDaysForm = this.fb.group({
      days: this.fb.array([]),
    });
    this.initForm()

    this.workingDaysForm.valueChanges.subscribe((formValues) => {
      // console.log(formValues);
      
      this.stateManagement.setResourceWeeklySchedule(formValues)
    });
  }

  

  initForm() {
    this.workingDaysForm = this.fb.group({
      days: this.fb.array([
        this.createDayGroup(),
        this.createDayGroup(),
        this.createDayGroup(),
        this.createDayGroup(),
        this.createDayGroup(),
        this.createDayGroup(),
        this.createDayGroup()
      ])
    });
  }

  createDayGroup() {
    return this.fb.group({
      isActive: false,
      startTime: '',
      endTime: '',
      availableSlots: this.fb.array([]) 
    });
  }
  toggleDay(dayIndex: number) {
    const dayArray = this.workingDaysForm.get('days') as FormArray;
    const dayControl = dayArray.at(dayIndex) as FormGroup;
    const isActiveControl = dayControl.get('isActive');
  
    if (isActiveControl) {
      isActiveControl.setValue(!isActiveControl.value);
      this.showSlots[dayIndex] = isActiveControl.value;
    }
  }

  getDaysArray() {
    return (this.workingDaysForm.get('days') as FormArray).controls;
  }

  addSlot(dayIndex: number) {
    const slotsArray = this.getSlotsArray(dayIndex);
    if (slotsArray) {
      slotsArray.push(this.createSlotGroup());
    }
  }

  removeSlot(dayIndex: number, slotIndex: number) {
    const slotsArray = this.getSlotsArray(dayIndex);
    if (slotsArray) {
      slotsArray.removeAt(slotIndex);
    }
  }

  createSlotGroup() {
    return this.fb.group({
      startTime: '',
      endTime: ''
    });
  }

  getDayName(index: number): string {
    const dayNames: string[] =  ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return dayNames[index] || '';
  }

  getSlotsArray(dayIndex: number): FormArray | null {
    const daysArray = this.getDaysArray();
    const dayControl = daysArray.at(dayIndex);
    return dayControl ? (dayControl.get('availableSlots') as FormArray) : null;
  }

  switchLanguage(language: any) {
    this.translate.use(language.target.value);
  }

  toggleDialog(element: any, checkbox: HTMLInputElement) {
    element.isActive = !element.isActive;
    checkbox.checked = element.isActive;
  }
}
