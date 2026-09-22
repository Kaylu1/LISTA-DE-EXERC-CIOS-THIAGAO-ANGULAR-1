import { Component } from '@angular/core';

/**
 * Exercicio 6 - Tratamento de lista vazia.
 * Conceitos trabalhados: combinacao de ngIf e ngFor.
 */
@Component({
  selector: 'app-ex06-lista-vazia',
  standalone: false,
  templateUrl: './ex06-lista-vazia.component.html',
})
export class Ex06ListaVaziaComponent {
  /** Copia de referencia usada para restaurar a lista original. */
  private readonly nomesIniciais = [
    'Ana Beatriz',
    'Bruno Carvalho',
    'Carla Menezes',
    'Daniel Rocha',
    'Eduarda Lima',
  ];

  nomes = [...this.nomesIniciais];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.nomesIniciais];
  }
}
