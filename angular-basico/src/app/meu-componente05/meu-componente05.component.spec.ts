import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente05Component } from './meu-componente05.component';

describe('MeuComponente05Component', () => {
  let component: MeuComponente05Component;
  let fixture: ComponentFixture<MeuComponente05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
