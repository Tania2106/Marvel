import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encabezado3Component } from './encabezado3.component';

describe('Encabezado3Component', () => {
  let component: Encabezado3Component;
  let fixture: ComponentFixture<Encabezado3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encabezado3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encabezado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
