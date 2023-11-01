import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzaComponent } from './cobranza.component';

describe('CobranzaComponent', () => {
  let component: CobranzaComponent;
  let fixture: ComponentFixture<CobranzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CobranzaComponent]
    });
    fixture = TestBed.createComponent(CobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
