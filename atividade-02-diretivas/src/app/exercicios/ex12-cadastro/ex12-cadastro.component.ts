import { Component } from '@angular/core';
import { Produto } from '../../modelos/produto';

/**
 * Exercicio 12 - Cadastro simplificado.
 * Conceitos trabalhados: ngModel, validacoes, eventos, ngIf e ngFor.
 */
@Component({
  selector: 'app-ex12-cadastro',
  standalone: false,
  templateUrl: './ex12-cadastro.component.html',
  styleUrl: './ex12-cadastro.component.css',
})
export class Ex12CadastroComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado mecânico', preco: 249.9, quantidade: 8 },
    { id: 2, nome: 'Mouse sem fio', preco: 129.5, quantidade: 3 },
  ];

  nomeInformado = '';
  quantidadeInformada: number | null = null;
  mensagemErro = '';

  private proximoId = 3;

  cadastrarProduto(): void {
    this.mensagemErro = '';

    const nome = this.nomeInformado.trim();

    // Requisito 1: o nome precisa estar preenchido.
    if (nome === '') {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }

    // Requisito 2: a quantidade precisa ser igual ou maior que zero.
    if (this.quantidadeInformada === null || this.quantidadeInformada < 0) {
      this.mensagemErro = 'Informe uma quantidade igual ou maior que zero.';
      return;
    }

    this.produtos.push({
      id: this.proximoId++,
      nome,
      preco: 0,
      quantidade: this.quantidadeInformada,
    });

    this.limparCampos();
  }

  excluirProduto(produto: Produto): void {
    const posicao = this.produtos.indexOf(produto);
    if (posicao > -1) {
      this.produtos.splice(posicao, 1);
    }
  }

  private limparCampos(): void {
    this.nomeInformado = '';
    this.quantidadeInformada = null;
  }
}
