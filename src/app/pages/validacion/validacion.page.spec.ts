import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionPage } from './validacion.page';

describe('ValidacionPage', () => {
  let component: ValidacionPage;
  let fixture: ComponentFixture<ValidacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
