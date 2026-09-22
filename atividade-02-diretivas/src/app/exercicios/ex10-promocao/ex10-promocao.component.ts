import { Component } from '@angular/core';
import { Produto } from '../../modelos/produto';

/**
 * Exercicio 10 - Promocao e estilo dinamico.
 * Conceitos trabalhados: ngIf, ngStyle e eventos com objetos.
 */
@Component({
  selector: 'app-ex10-promocao',
  standalone: false,
  templateUrl: './ex10-promocao.component.html',
  styleUrl: './ex10-promocao.component.css',
})
export class Ex10PromocaoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 8, promocao: true },
    { id: 2, nome: 'Mouse sem fio', preco: 129.5, quantidade: 3, promocao: false },
    { id: 3, nome: 'Monitor 24 polegadas', preco: 899, quantidade: 4, promocao: false },
    { id: 4, nome: 'Headset gamer', preco: 349.9, quantidade: 12, promocao: true },
    { id: 5, nome: 'Webcam Full HD', preco: 219, quantidade: 5, promocao: false },
  ];

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }

  /** Estilos aplicados ao preco por meio de ngStyle. */
  estiloDoPreco(produto: Produto): Record<string, string> {
    return {
      color: produto.promocao ? '#b91c1c' : '#0f172a',
      'font-size': produto.promocao ? '1.25rem' : '1rem',
      'font-weight': produto.promocao ? '700' : '500',
    };
  }
}
