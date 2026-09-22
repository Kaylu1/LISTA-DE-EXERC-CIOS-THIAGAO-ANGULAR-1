import { Component } from '@angular/core';

/**
 * Exercicio 2 - Situacao do usuario.
 * Conceitos trabalhados: ngIf, else e eventos.
 */
@Component({
  selector: 'app-ex02-usuario',
  standalone: false,
  templateUrl: './ex02-usuario.component.html',
})
export class Ex02UsuarioComponent {
  usuarioLogado = false;

  alternarSessao(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }

  /** Texto do botao conforme a situacao atual. */
  get textoBotao(): string {
    return this.usuarioLogado ? 'Sair' : 'Entrar';
  }
}
