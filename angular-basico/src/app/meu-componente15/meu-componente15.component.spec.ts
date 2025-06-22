import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente15Component } from './meu-componente15.component';

describe('MeuComponente15Component', () => {
  let component: MeuComponente15Component;
  let fixture: ComponentFixture<MeuComponente15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
