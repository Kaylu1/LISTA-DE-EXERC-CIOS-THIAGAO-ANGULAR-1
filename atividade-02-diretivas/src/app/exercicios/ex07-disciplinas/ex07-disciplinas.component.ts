import { Component } from '@angular/core';

/**
 * Exercicio 7 - Cores alternadas.
 * Conceitos trabalhados: ngFor, even, odd e ngClass.
 */
@Component({
  selector: 'app-ex07-disciplinas',
  standalone: false,
  templateUrl: './ex07-disciplinas.component.html',
  styleUrl: './ex07-disciplinas.component.css',
})
export class Ex07DisciplinasComponent {
  disciplinas = [
    'Programação Web',
    'Banco de Dados',
    'Engenharia de Software',
    'Estrutura de Dados',
    'Redes de Computadores',
    'Projeto Integrador',
  ];
}
