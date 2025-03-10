import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente09Component } from './meu-componente09.component';

describe('MeuComponente09Component', () => {
  let component: MeuComponente09Component;
  let fixture: ComponentFixture<MeuComponente09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
