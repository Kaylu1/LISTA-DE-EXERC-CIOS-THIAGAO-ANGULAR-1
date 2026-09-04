import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.component.html'
})
export class EstoqueComponent {
  nomeProduto = 'Teclado Mecânico';
  estoque = 5;

  aumentar(): void {
    this.estoque++;
  }

  diminuir(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}
