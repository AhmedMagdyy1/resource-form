import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceWeeklyScheduleComponent } from './resource-weekly-schedule.component';

describe('ResourceWeeklyScheduleComponent', () => {
  let component: ResourceWeeklyScheduleComponent;
  let fixture: ComponentFixture<ResourceWeeklyScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceWeeklyScheduleComponent]
    });
    fixture = TestBed.createComponent(ResourceWeeklyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
