import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header2Center } from './header2-center';

describe('Header2Center', () => {
  let component: Header2Center;
  let fixture: ComponentFixture<Header2Center>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header2Center]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header2Center);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
