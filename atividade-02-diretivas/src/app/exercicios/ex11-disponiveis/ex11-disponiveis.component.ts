import { Component } from '@angular/core';
import { Produto } from '../../modelos/produto';

/**
 * Exercicio 11 - Exibir somente produtos disponiveis.
 * Conceitos trabalhados: combinacao de condicao e repeticao.
 */
@Component({
  selector: 'app-ex11-disponiveis',
  standalone: false,
  templateUrl: './ex11-disponiveis.component.html',
})
export class Ex11DisponiveisComponent {
  somenteDisponiveis = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 8 },
    { id: 2, nome: 'Mouse sem fio', preco: 129.5, quantidade: 3 },
    { id: 3, nome: 'Monitor 24 polegadas', preco: 899, quantidade: 0 },
    { id: 4, nome: 'Headset gamer', preco: 349.9, quantidade: 12 },
    { id: 5, nome: 'Webcam Full HD', preco: 219, quantidade: 0 },
  ];

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }

  /**
   * Indica se o produto deve aparecer na tela.
   * A decisao acontece durante a construcao da interface, sem criar um segundo array.
   */
  deveExibir(produto: Produto): boolean {
    return !this.somenteDisponiveis || produto.quantidade > 0;
  }

  /** Verdadeiro quando existe ao menos um produto com estoque. */
  get existeProdutoComEstoque(): boolean {
    return this.produtos.some((produto) => produto.quantidade > 0);
  }
}
