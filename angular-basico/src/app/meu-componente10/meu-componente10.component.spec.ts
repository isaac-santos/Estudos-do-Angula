import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente10Component } from './meu-componente10.component';

describe('MeuComponente10Component', () => {
  let component: MeuComponente10Component;
  let fixture: ComponentFixture<MeuComponente10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
