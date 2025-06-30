import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardDetails } from './property-card-details';

describe('PropertyCardDetails', () => {
  let component: PropertyCardDetails;
  let fixture: ComponentFixture<PropertyCardDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCardDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCardDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
