import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente03Component } from './meu-componente03.component';

describe('MeuComponente03Component', () => {
  let component: MeuComponente03Component;
  let fixture: ComponentFixture<MeuComponente03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
