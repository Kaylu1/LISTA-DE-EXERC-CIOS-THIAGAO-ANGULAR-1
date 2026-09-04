import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  standalone: false,
  templateUrl: './calculo.component.html'
})
export class CalculoComponent {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;
}
