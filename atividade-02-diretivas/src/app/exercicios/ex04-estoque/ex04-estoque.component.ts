import { Component } from '@angular/core';

/**
 * Exercicio 4 - Situacao do estoque.
 * Conceitos trabalhados: ngIf, property binding e eventos.
 */
@Component({
  selector: 'app-ex04-estoque',
  standalone: false,
  templateUrl: './ex04-estoque.component.html',
})
export class Ex04EstoqueComponent {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionarUnidade(): void {
    this.quantidadeEstoque++;
  }

  removerUnidade(): void {
    // Requisito 5: o estoque nunca pode ficar negativo.
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
