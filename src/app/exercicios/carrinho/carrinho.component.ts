import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  standalone: false,
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagem = `${this.quantidade} ${this.produto} adicionado(s) ao carrinho.`;
  }
}
