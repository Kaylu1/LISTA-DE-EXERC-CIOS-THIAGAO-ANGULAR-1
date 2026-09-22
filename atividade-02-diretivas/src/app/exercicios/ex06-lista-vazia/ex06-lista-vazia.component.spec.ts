import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex06ListaVaziaComponent } from './ex06-lista-vazia.component';

describe('Exercício 6 · Tratamento de lista vazia', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('remove, limpa e restaura a lista mostrando a mensagem correta', async () => {
    const fixture = TestBed.createComponent(Ex06ListaVaziaComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const [botaoRemover, botaoLimpar, botaoRestaurar] = Array.from(elemento.querySelectorAll('button'));

    expect(elemento.querySelectorAll('ul.lista li').length).toBe(5);
    expect(elemento.querySelector('.vazio')).toBeNull();

    botaoRemover.click();
    await fixture.whenStable();
    expect(elemento.querySelectorAll('ul.lista li').length).toBe(4);
    expect(elemento.querySelector('.contador')?.textContent).toContain('4');

    botaoLimpar.click();
    await fixture.whenStable();
    expect(elemento.querySelectorAll('ul.lista li').length).toBe(0);
    expect(elemento.querySelector('.vazio')?.textContent?.trim()).toBe('Nenhum nome cadastrado');
    expect(botaoRemover.disabled).toBe(true);

    botaoRestaurar.click();
    await fixture.whenStable();
    expect(elemento.querySelectorAll('ul.lista li').length).toBe(5);
    expect(elemento.querySelector('.vazio')).toBeNull();
  });
});
