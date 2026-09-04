import { Component } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  standalone: false,
  templateUrl: './apresentacao.component.html'
})
export class ApresentacaoComponent {
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';
}
