import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente12Component } from './meu-componente12.component';

describe('MeuComponente12Component', () => {
  let component: MeuComponente12Component;
  let fixture: ComponentFixture<MeuComponente12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
