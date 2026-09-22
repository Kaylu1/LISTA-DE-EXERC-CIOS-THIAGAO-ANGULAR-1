import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex03IdadeComponent } from './ex03-idade.component';

describe('Exercício 3 · Verificação de idade', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('classifica cada faixa etária corretamente', () => {
    const componente = TestBed.createComponent(Ex03IdadeComponent).componentInstance;

    const faixas: Array<[number, string]> = [
      [0, 'faixa-crianca'],
      [11, 'faixa-crianca'],
      [12, 'faixa-adolescente'],
      [17, 'faixa-adolescente'],
      [18, 'faixa-adulto'],
      [59, 'faixa-adulto'],
      [60, 'faixa-idoso'],
      [85, 'faixa-idoso'],
    ];

    for (const [idade, classeEsperada] of faixas) {
      componente.idade = idade;
      expect(componente.classeFaixa).toBe(classeEsperada);
    }
  });

  it('mostra na tela a classificação conforme os cliques', async () => {
    const fixture = TestBed.createComponent(Ex03IdadeComponent);
    await fixture.whenStable();

    const elemento = fixture.nativeElement as HTMLElement;
    const botaoAumentar = elemento.querySelectorAll('button')[0] as HTMLButtonElement;
    const classificacao = () => elemento.querySelector('.resultado')?.textContent?.trim();

    const clicar = async (vezes: number) => {
      for (let i = 0; i < vezes; i++) {
        botaoAumentar.click();
      }
      await fixture.whenStable();
    };

    expect(classificacao()).toBe('Criança');

    await clicar(12);
    expect(fixture.componentInstance.idade).toBe(12);
    expect(classificacao()).toBe('Adolescente');

    await clicar(6);
    expect(fixture.componentInstance.idade).toBe(18);
    expect(classificacao()).toBe('Adulto');

    await clicar(42);
    expect(fixture.componentInstance.idade).toBe(60);
    expect(classificacao()).toBe('Idoso');
  });

  it('não permite idade negativa', async () => {
    const fixture = TestBed.createComponent(Ex03IdadeComponent);
    await fixture.whenStable();

    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    const [botaoAumentar, botaoDiminuir] = Array.from(elemento.querySelectorAll('button'));

    expect(componente.idade).toBe(0);
    expect(botaoDiminuir.disabled).toBe(true);

    botaoAumentar.click();
    await fixture.whenStable();
    expect(componente.idade).toBe(1);
    expect(botaoDiminuir.disabled).toBe(false);

    botaoDiminuir.click();
    await fixture.whenStable();
    expect(componente.idade).toBe(0);
    expect(botaoDiminuir.disabled).toBe(true);

    componente.diminuirIdade();
    expect(componente.idade).toBe(0);
  });
});
