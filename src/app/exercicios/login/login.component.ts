import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagem = '';

  get camposPreenchidos(): boolean {
    return this.usuario.trim().length > 0 && this.senha.trim().length > 0;
  }

  entrar(): void {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }
}
