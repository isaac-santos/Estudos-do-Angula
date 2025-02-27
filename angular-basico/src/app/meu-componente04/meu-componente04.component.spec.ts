import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente04Component } from './meu-componente04.component';

describe('MeuComponente04Component', () => {
  let component: MeuComponente04Component;
  let fixture: ComponentFixture<MeuComponente04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
