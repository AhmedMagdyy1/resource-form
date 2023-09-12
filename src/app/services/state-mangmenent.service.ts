import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResourceAvailability, ResourceImportation, WorkingDaysForm } from '../resources/resources.model';


@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  constructor() { }

  resourceInfoForm = new BehaviorSubject<ResourceImportation|undefined>(undefined)
  resourceAvailability = new BehaviorSubject<ResourceAvailability|undefined>(undefined)
  resourceWeeklySchedule = new BehaviorSubject<WorkingDaysForm|undefined>(undefined)

  setUserInfoForm(ResourceImportation:ResourceImportation){
    if(ResourceImportation!= undefined){
      this.resourceInfoForm.next(ResourceImportation);
    }
  }
  setResourceAvailability(ResourceAvailability:ResourceAvailability){
    if(ResourceAvailability!= undefined){
      console.log(ResourceAvailability);
      this.resourceAvailability.next(ResourceAvailability);
    }
  }
  setResourceWeeklySchedule(ResourceWeeklySchedule:WorkingDaysForm){
    if(ResourceWeeklySchedule!= undefined){
      console.log(ResourceWeeklySchedule);
      this.resourceWeeklySchedule.next(ResourceWeeklySchedule);
    }
  }

}
