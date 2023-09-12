export interface ResourceImportation {
    imgUrl:any;
    resourceName:string
}

export interface ResourceAvailability {
    resourcesAvailableTo?:number;
    month?:number;
    minutes?:number;
    selectedRadioValue?:number;
    selectedPersonValue?:number;
    numberOfPeople?:number;
}

export interface Slot {
    startTime: string;
    endTime: string;
  }
  
  export interface Day {
    isActive: boolean;
    startTime: string;
    endTime: string;
    availableSlots: Slot[];
  }
  
  export interface WorkingDaysForm {
    days: Day[];
  }
  
  export const initialSlot: Slot = {
    startTime: '',
    endTime: '',
  };
  
  export const initialDay: Day = {
    isActive: false,
    startTime: '',
    endTime: '',
    availableSlots: [initialSlot],
  };
  
  export const initialWorkingDaysForm: WorkingDaysForm = {
    days: [initialDay],
  };
  
