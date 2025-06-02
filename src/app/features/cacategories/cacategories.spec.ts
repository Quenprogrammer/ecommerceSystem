import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cacategories } from './cacategories';

describe('Cacategories', () => {
  let component: Cacategories;
  let fixture: ComponentFixture<Cacategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cacategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cacategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
