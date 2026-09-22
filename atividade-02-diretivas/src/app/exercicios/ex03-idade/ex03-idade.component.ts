import { Component } from '@angular/core';

/**
 * Exercicio 3 - Verificacao de idade.
 * Conceitos trabalhados: condicoes encadeadas e event binding.
 */
@Component({
  selector: 'app-ex03-idade',
  standalone: false,
  templateUrl: './ex03-idade.component.html',
  styleUrl: './ex03-idade.component.css',
})
export class Ex03IdadeComponent {
  idade = 0;

  aumentarIdade(): void {
    this.idade++;
  }

  diminuirIdade(): void {
    // Requisito 6: a idade nunca pode ficar negativa.
    if (this.idade > 0) {
      this.idade--;
    }
  }

  /** Classe de cor aplicada conforme a faixa etaria. */
  get classeFaixa(): string {
    if (this.idade < 12) {
      return 'faixa-crianca';
    }
    if (this.idade <= 17) {
      return 'faixa-adolescente';
    }
    if (this.idade <= 59) {
      return 'faixa-adulto';
    }
    return 'faixa-idoso';
  }
}
