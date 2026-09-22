import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex01MensagemComponent } from './ex01-mensagem.component';

describe('Exercício 1 · Exibição de mensagem', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('esconde a mensagem no estado inicial e alterna a cada clique no mesmo botão', async () => {
    const fixture = TestBed.createComponent(Ex01MensagemComponent);
    await fixture.whenStable();

    const elemento = fixture.nativeElement as HTMLElement;
    const botao = elemento.querySelector('button') as HTMLButtonElement;

    expect(botao.textContent?.trim()).toBe('Mostrar ou ocultar mensagem');
    expect(elemento.querySelector('.resultado')).toBeNull();

    botao.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.resultado')?.textContent?.trim()).toBe('Bem-vindo ao sistema');

    botao.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.resultado')).toBeNull();
  });
});
