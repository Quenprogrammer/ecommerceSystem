import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndTag } from './header-and-tag';

describe('HeaderAndTag', () => {
  let component: HeaderAndTag;
  let fixture: ComponentFixture<HeaderAndTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAndTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAndTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
