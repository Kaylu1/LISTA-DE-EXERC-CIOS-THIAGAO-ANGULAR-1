import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex13TarefasComponent } from './ex13-tarefas.component';

describe('Exercício 13 · Lista de tarefas', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('conta as tarefas concluídas e pendentes', () => {
    const componente = TestBed.createComponent(Ex13TarefasComponent).componentInstance;

    expect(componente.totalTarefas).toBe(6);
    expect(componente.totalConcluidas).toBe(2);
    expect(componente.totalPendentes).toBe(4);
  });

  it('altera a situação pelo botão e atualiza os totais na tela', async () => {
    const fixture = TestBed.createComponent(Ex13TarefasComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const tarefaPendente = componente.tarefas[1];
    expect(tarefaPendente.concluida).toBe(false);
    expect(elemento.querySelectorAll('.tarefa-concluida').length).toBe(2);

    const botoesDaLista = elemento.querySelectorAll('ul.lista button');
    (botoesDaLista[1] as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(tarefaPendente.concluida).toBe(true);
    expect(componente.totalConcluidas).toBe(3);
    expect(componente.totalPendentes).toBe(3);
    expect(elemento.querySelectorAll('.tarefa-concluida').length).toBe(3);
  });

  it('aplica uma classe conforme a prioridade', async () => {
    const fixture = TestBed.createComponent(Ex13TarefasComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(elemento.querySelectorAll('.prioridade-alta').length).toBe(3);
    expect(elemento.querySelectorAll('.prioridade-media').length).toBe(2);
    expect(elemento.querySelectorAll('.prioridade-baixa').length).toBe(1);
  });

  it('exibe Pendente ou Concluída conforme a situação', async () => {
    const fixture = TestBed.createComponent(Ex13TarefasComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const concluidas = Array.from(elemento.querySelectorAll('.etiqueta.sucesso'));
    const pendentes = Array.from(elemento.querySelectorAll('.etiqueta.alerta'));

    expect(concluidas.length).toBe(2);
    expect(pendentes.length).toBe(4);
    expect(concluidas[0].textContent?.trim()).toBe('Concluída');
    expect(pendentes[0].textContent?.trim()).toBe('Pendente');
  });

  it('mostra a mensagem quando não existirem tarefas', async () => {
    const fixture = TestBed.createComponent(Ex13TarefasComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const botoes = Array.from(elemento.querySelectorAll('button'));
    const botaoLimpar = botoes.find((botao) => botao.textContent?.includes('Limpar a lista'))!;
    const botaoRestaurar = botoes.find((botao) => botao.textContent?.includes('Restaurar'))!;

    botaoLimpar.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.vazio')?.textContent?.trim()).toBe('Nenhuma tarefa cadastrada');
    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(0);

    botaoRestaurar.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.vazio')).toBeNull();
    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(6);
  });
});
