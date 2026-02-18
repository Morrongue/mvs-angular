import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noencontrado } from './noencontrado';

describe('Noencontrado', () => {
  let component: Noencontrado;
  let fixture: ComponentFixture<Noencontrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noencontrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noencontrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
