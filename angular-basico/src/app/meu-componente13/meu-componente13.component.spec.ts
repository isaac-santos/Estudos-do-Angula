import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente13Component } from './meu-componente13.component';

describe('MeuComponente13Component', () => {
  let component: MeuComponente13Component;
  let fixture: ComponentFixture<MeuComponente13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
