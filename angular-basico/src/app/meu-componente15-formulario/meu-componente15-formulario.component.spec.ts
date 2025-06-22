import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente15FormularioComponent } from './meu-componente15-formulario.component';

describe('MeuComponente15FormularioComponent', () => {
  let component: MeuComponente15FormularioComponent;
  let fixture: ComponentFixture<MeuComponente15FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente15FormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente15FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
