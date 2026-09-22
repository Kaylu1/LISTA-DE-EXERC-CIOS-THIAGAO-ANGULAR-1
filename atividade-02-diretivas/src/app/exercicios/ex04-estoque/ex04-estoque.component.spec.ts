import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex04EstoqueComponent } from './ex04-estoque.component';

describe('Exercício 4 · Situação do estoque', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('sinaliza a falta de estoque e desabilita a remoção ao chegar a zero', async () => {
    const fixture = TestBed.createComponent(Ex04EstoqueComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(elemento.querySelector('.resultado')?.textContent?.trim()).toBe('Produto disponível');
    expect(elemento.querySelector('.aviso')).toBeNull();

    const botaoRemover = elemento.querySelectorAll('button')[1] as HTMLButtonElement;
    expect(botaoRemover.disabled).toBe(false);

    for (let i = 0; i < 5; i++) {
      botaoRemover.click();
      await fixture.whenStable();
    }

    expect(componente.quantidadeEstoque).toBe(0);
    expect(elemento.querySelector('.resultado')).toBeNull();
    expect(elemento.querySelector('.aviso')?.textContent?.trim()).toBe('Produto sem estoque');
    expect(botaoRemover.disabled).toBe(true);

    componente.removerUnidade();
    expect(componente.quantidadeEstoque).toBe(0);
  });
});
