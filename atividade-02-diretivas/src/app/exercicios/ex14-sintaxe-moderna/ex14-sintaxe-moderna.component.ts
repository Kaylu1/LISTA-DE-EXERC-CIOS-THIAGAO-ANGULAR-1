import { Component } from '@angular/core';
import { Produto } from '../../modelos/produto';

/**
 * Exercicio 14 - Conversao para a sintaxe moderna.
 *
 * Exercicios convertidos: 2 (ngIf/else), 6 (ngFor com lista vazia) e 9 (ngFor com ngClass).
 * Conceitos trabalhados: @if, @else, @for, @empty e track.
 */
@Component({
  selector: 'app-ex14-sintaxe-moderna',
  standalone: false,
  templateUrl: './ex14-sintaxe-moderna.component.html',
  styleUrl: './ex14-sintaxe-moderna.component.css',
})
export class Ex14SintaxeModernaComponent {
  // ----- Exercicio 2 convertido -----
  usuarioLogado = false;

  alternarSessao(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  // ----- Exercicio 6 convertido -----
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

  // ----- Exercicio 9 convertido -----
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 8 },
    { id: 2, nome: 'Mouse sem fio', preco: 129.5, quantidade: 3 },
    { id: 3, nome: 'Monitor 24 polegadas', preco: 899, quantidade: 0 },
    { id: 4, nome: 'Headset gamer', preco: 349.9, quantidade: 12 },
    { id: 5, nome: 'Webcam Full HD', preco: 219, quantidade: 5 },
  ];

  classificarEstoque(produto: Produto): string {
    if (produto.quantidade === 0) {
      return 'Sem estoque';
    }
    if (produto.quantidade <= 5) {
      return 'Estoque baixo';
    }
    return 'Estoque disponível';
  }

  definirClasseEstoque(produto: Produto): string {
    if (produto.quantidade === 0) {
      return 'sem-estoque';
    }
    if (produto.quantidade <= 5) {
      return 'estoque-baixo';
    }
    return 'estoque-disponivel';
  }
}
