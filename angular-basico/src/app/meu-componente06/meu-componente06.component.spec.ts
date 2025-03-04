import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente06Component } from './meu-componente06.component';

describe('MeuComponente06Component', () => {
  let component: MeuComponente06Component;
  let fixture: ComponentFixture<MeuComponente06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
