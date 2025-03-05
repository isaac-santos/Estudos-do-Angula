import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente07Component } from './meu-componente07.component';

describe('MeuComponente07Component', () => {
  let component: MeuComponente07Component;
  let fixture: ComponentFixture<MeuComponente07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
