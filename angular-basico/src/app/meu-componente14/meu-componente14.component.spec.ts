import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente14Component } from './meu-componente14.component';

describe('MeuComponente14Component', () => {
  let component: MeuComponente14Component;
  let fixture: ComponentFixture<MeuComponente14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
