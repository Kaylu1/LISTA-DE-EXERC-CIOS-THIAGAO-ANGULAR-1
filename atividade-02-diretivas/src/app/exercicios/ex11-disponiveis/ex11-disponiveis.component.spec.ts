import { TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex11DisponiveisComponent } from './ex11-disponiveis.component';

describe('Exercício 11 · Exibir somente produtos disponíveis', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('filtra os produtos sem estoque sem criar um segundo array', async () => {
    const fixture = TestBed.createComponent(Ex11DisponiveisComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(componente.somenteDisponiveis).toBe(false);
    expect(elemento.querySelectorAll('ul.lista li').length).toBe(5);

    const botaoFiltro = elemento.querySelector('button') as HTMLButtonElement;
    botaoFiltro.click();
    await fixture.whenStable();

    // Apenas os tres produtos com quantidade maior que zero continuam na tela.
    expect(elemento.querySelectorAll('ul.lista li').length).toBe(3);
    // O array original permanece intacto.
    expect(componente.produtos.length).toBe(5);

    botaoFiltro.click();
    await fixture.whenStable();
    expect(elemento.querySelectorAll('ul.lista li').length).toBe(5);
  });
});
