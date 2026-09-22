import { TestBed } from '@angular/core/testing';
import { AppModule } from '../../app-module';
import { Ex08ProdutosComponent } from './ex08-produtos.component';

describe('Exercício 8 · Lista de produtos', () => {
  beforeEach(async () => {
    // O AppModule registra o locale pt-BR usado pelo pipe currency.
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
  });

  it('formata os preços em reais e calcula o total em estoque', async () => {
    const fixture = TestBed.createComponent(Ex08ProdutosComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const primeiraLinha = elemento.querySelectorAll('tbody tr')[0];
    const colunas = Array.from(primeiraLinha.querySelectorAll('td')).map((coluna) =>
      (coluna.textContent ?? '').replace(/\u00a0/g, ' ').trim(),
    );

    expect(colunas[0]).toBe('1');
    expect(colunas[1]).toBe('Teclado mecânico');
    expect(colunas[2]).toBe('R$ 249,90');
    expect(colunas[3]).toBe('8');
    // 249,90 multiplicado por 8 unidades.
    expect(colunas[4]).toBe('R$ 1.999,20');
  });

  it('apresenta os cinco produtos cadastrados', async () => {
    const fixture = TestBed.createComponent(Ex08ProdutosComponent);
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(elemento.querySelectorAll('tbody tr').length).toBe(5);
    // 1999,20 + 388,50 + 0 + 4198,80 + 1095,00
    expect(fixture.componentInstance.totalGeral).toBeCloseTo(7681.5, 2);
  });
});
