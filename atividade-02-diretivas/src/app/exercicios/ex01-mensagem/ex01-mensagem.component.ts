import { Component } from '@angular/core';

/**
 * Exercicio 1 - Exibicao de mensagem.
 * Conceitos trabalhados: event binding e ngIf.
 */
@Component({
  selector: 'app-ex01-mensagem',
  standalone: false,
  templateUrl: './ex01-mensagem.component.html',
})
export class Ex01MensagemComponent {
  mensagemVisivel = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
