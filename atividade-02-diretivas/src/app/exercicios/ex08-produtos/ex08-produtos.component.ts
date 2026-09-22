import { Component } from '@angular/core';
import { Produto } from '../../modelos/produto';

/**
 * Exercicio 8 - Lista de produtos.
 * Conceitos trabalhados: objetos, ngFor, interpolacao e pipe currency.
 */
@Component({
  selector: 'app-ex08-produtos',
  standalone: false,
  templateUrl: './ex08-produtos.component.html',
})
export class Ex08ProdutosComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 8 },
    { id: 2, nome: 'Mouse sem fio', preco: 129.5, quantidade: 3 },
    { id: 3, nome: 'Monitor 24 polegadas', preco: 899, quantidade: 0 },
    { id: 4, nome: 'Headset gamer', preco: 349.9, quantidade: 12 },
    { id: 5, nome: 'Webcam Full HD', preco: 219, quantidade: 5 },
  ];

  /** Valor total em estoque de um produto: preco multiplicado pela quantidade. */
  calcularTotalEmEstoque(produto: Produto): number {
    return produto.preco * produto.quantidade;
  }

  /** Soma do valor de todos os produtos em estoque. */
  get totalGeral(): number {
    return this.produtos.reduce((soma, produto) => soma + this.calcularTotalEmEstoque(produto), 0);
  }
}
