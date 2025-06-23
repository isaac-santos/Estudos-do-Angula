import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente16Component } from './meu-componente16.component';

describe('MeuComponente16Component', () => {
  let component: MeuComponente16Component;
  let fixture: ComponentFixture<MeuComponente16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
