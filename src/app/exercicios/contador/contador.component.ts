import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  quantidade = 0;

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
