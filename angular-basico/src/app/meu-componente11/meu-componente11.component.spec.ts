import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente11Component } from './meu-componente11.component';

describe('MeuComponente11Component', () => {
  let component: MeuComponente11Component;
  let fixture: ComponentFixture<MeuComponente11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
