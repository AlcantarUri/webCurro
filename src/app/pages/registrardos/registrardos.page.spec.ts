import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrardosPage } from './registrardos.page';

describe('RegistrardosPage', () => {
  let component: RegistrardosPage;
  let fixture: ComponentFixture<RegistrardosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrardosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrardosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
