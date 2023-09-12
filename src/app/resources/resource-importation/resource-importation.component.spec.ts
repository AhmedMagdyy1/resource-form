import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceImportationComponent } from './resource-importation.component';

describe('ResourceImportationComponent', () => {
  let component: ResourceImportationComponent;
  let fixture: ComponentFixture<ResourceImportationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceImportationComponent]
    });
    fixture = TestBed.createComponent(ResourceImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
