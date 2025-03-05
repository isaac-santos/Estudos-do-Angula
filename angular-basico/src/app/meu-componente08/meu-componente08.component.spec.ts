import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente08Component } from './meu-componente08.component';

describe('MeuComponente08Component', () => {
  let component: MeuComponente08Component;
  let fixture: ComponentFixture<MeuComponente08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
