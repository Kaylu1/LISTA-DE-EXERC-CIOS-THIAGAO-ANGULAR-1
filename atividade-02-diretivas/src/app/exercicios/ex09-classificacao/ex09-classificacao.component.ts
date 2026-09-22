import { Component } from '@angular/core';
import { Produto } from '../../modelos/produto';

/**
 * Exercicio 9 - Classificacao dos produtos.
 * Conceitos trabalhados: condicoes encadeadas e ngClass.
 */
@Component({
  selector: 'app-ex09-classificacao',
  standalone: false,
  templateUrl: './ex09-classificacao.component.html',
  styleUrl: './ex09-classificacao.component.css',
})
export class Ex09ClassificacaoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 8 },
    { id: 2, nome: 'Mouse sem fio', preco: 129.5, quantidade: 3 },
    { id: 3, nome: 'Monitor 24 polegadas', preco: 899, quantidade: 0 },
    { id: 4, nome: 'Headset gamer', preco: 349.9, quantidade: 12 },
    { id: 5, nome: 'Webcam Full HD', preco: 219, quantidade: 5 },
  ];

  /** Texto da situacao do estoque. */
  classificarEstoque(produto: Produto): string {
    if (produto.quantidade === 0) {
      return 'Sem estoque';
    }
    if (produto.quantidade <= 5) {
      return 'Estoque baixo';
    }
    return 'Estoque disponível';
  }

  /** Classe CSS correspondente: vermelho, amarelo ou verde. */
  definirClasseEstoque(produto: Produto): string {
    if (produto.quantidade === 0) {
      return 'sem-estoque';
    }
    if (produto.quantidade <= 5) {
      return 'estoque-baixo';
    }
    return 'estoque-disponivel';
  }

  retirarUnidade(produto: Produto): void {
    if (produto.quantidade > 0) {
      produto.quantidade--;
    }
  }

  reporUnidade(produto: Produto): void {
    produto.quantidade++;
  }
}
