import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaunoPage } from './mapauno.page';

describe('MapaunoPage', () => {
  let component: MapaunoPage;
  let fixture: ComponentFixture<MapaunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
