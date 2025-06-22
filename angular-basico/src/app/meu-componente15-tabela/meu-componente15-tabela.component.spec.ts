import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponente15TabelaComponent } from './meu-componente15-tabela.component';

describe('MeuComponente15TabelaComponent', () => {
  let component: MeuComponente15TabelaComponent;
  let fixture: ComponentFixture<MeuComponente15TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuComponente15TabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuComponente15TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
