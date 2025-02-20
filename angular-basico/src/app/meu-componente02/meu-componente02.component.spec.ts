import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente02Component } from './meu-componente02.component';

describe('MeuComponente02Component', () => {
  let component: MeuComponente02Component;
  let fixture: ComponentFixture<MeuComponente02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
