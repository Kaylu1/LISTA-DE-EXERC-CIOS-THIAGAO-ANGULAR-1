import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { DesafioPainelComponent } from './desafio-painel.component';

describe('Desafio final · Painel de projetos', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('apresenta todos os projetos com posição, título, equipe e status', async () => {
    const fixture = TestBed.createComponent(DesafioPainelComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const itens = elemento.querySelectorAll('ul.lista > li');
    expect(itens.length).toBe(6);
    expect(itens[0].textContent).toContain('1. Sistema de controle de frotas');
    expect(itens[0].textContent).toContain('Ana Beatriz, Bruno Carvalho');
    expect(itens[0].querySelector('.etiqueta-status')?.textContent?.trim()).toBe('Concluído');
  });

  it('conta os totais de projetos, concluídos e entregues', () => {
    const componente = TestBed.createComponent(DesafioPainelComponent).componentInstance;

    expect(componente.totalProjetos).toBe(6);
    expect(componente.totalConcluidos).toBe(2);
    expect(componente.totalEntregues).toBe(3);
  });

  it('exibe o aviso de nota não definida e destaca as notas pelos limites', async () => {
    const fixture = TestBed.createComponent(DesafioPainelComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(elemento.querySelector('.sem-nota')?.textContent?.trim()).toBe('Nota ainda não definida');
    // Notas 9, 7.5 e 8 ficam em destaque; a nota 5.5 e sinalizada; a 6.5 fica fora dos dois grupos.
    expect(elemento.querySelectorAll('.nota-destaque').length).toBe(3);
    expect(elemento.querySelectorAll('.nota-abaixo').length).toBe(1);
  });

  it('exibe Projeto entregue somente nos projetos entregues', async () => {
    const fixture = TestBed.createComponent(DesafioPainelComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const etiquetas = Array.from(elemento.querySelectorAll('.etiqueta.sucesso')).filter(
      (etiqueta) => etiqueta.textContent?.trim() === 'Projeto entregue',
    );
    expect(etiquetas.length).toBe(3);
  });

  it('mostra e oculta os projetos concluídos', async () => {
    const fixture = TestBed.createComponent(DesafioPainelComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const botaoFiltro = elemento.querySelector('button') as HTMLButtonElement;
    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(6);

    botaoFiltro.click();
    await fixture.whenStable();
    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(4);

    botaoFiltro.click();
    await fixture.whenStable();
    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(6);
  });

  it('altera o status de um projeto pelo campo de seleção', async () => {
    const fixture = TestBed.createComponent(DesafioPainelComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(elemento.querySelectorAll('.status-planejamento').length).toBe(1);
    expect(elemento.querySelectorAll('.status-testes').length).toBe(1);

    // O quarto projeto comeca em planejamento.
    const campoStatus = elemento.querySelectorAll('select')[3] as HTMLSelectElement;
    campoStatus.value = 'testes';
    campoStatus.dispatchEvent(new Event('change'));
    await fixture.whenStable();

    expect(componente.projetos[3].status).toBe('testes');
    expect(elemento.querySelectorAll('.status-planejamento').length).toBe(0);
    expect(elemento.querySelectorAll('.status-testes').length).toBe(2);
  });

  it('exibe mensagens diferentes para lista vazia e para filtro sem resultado', async () => {
    const fixture = TestBed.createComponent(DesafioPainelComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const botoes = Array.from(elemento.querySelectorAll('button'));
    const botaoFiltro = botoes[0];
    const botaoLimpar = botoes.find((botao) => botao.textContent?.includes('Limpar o painel'))!;
    const botaoRestaurar = botoes.find((botao) => botao.textContent?.includes('Restaurar'))!;

    botaoLimpar.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.vazio')?.textContent?.trim()).toBe('Nenhum projeto cadastrado');

    botaoRestaurar.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.vazio')).toBeNull();

    // Com todos os projetos concluídos e o filtro ativo, nada sobra para exibir.
    componente.projetos.forEach((projeto) => (projeto.status = 'concluido'));
    botaoFiltro.click();
    await fixture.whenStable();
    expect(elemento.querySelector('.vazio')?.textContent?.trim()).toBe(
      'Nenhum projeto para exibir com o filtro atual',
    );
  });
});
