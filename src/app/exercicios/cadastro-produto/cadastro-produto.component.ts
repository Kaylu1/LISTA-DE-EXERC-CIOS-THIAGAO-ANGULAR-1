import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  templateUrl: './cadastro-produto.component.html'
})
export class CadastroProdutoComponent {
  produto = 'Mouse Gamer';
  preco = 150;
  quantidade = 2;

  get total(): number {
    return (this.preco || 0) * (this.quantidade || 0);
  }
}
