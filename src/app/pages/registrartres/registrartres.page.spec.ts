import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrartresPage } from './registrartres.page';

describe('RegistrartresPage', () => {
  let component: RegistrartresPage;
  let fixture: ComponentFixture<RegistrartresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrartresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrartresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
