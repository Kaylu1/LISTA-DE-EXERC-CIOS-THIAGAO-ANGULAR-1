import { Component } from '@angular/core';

/**
 * Exercicio 5 - Lista de nomes.
 * Conceitos trabalhados: ngFor, index, first e last.
 */
@Component({
  selector: 'app-ex05-nomes',
  standalone: false,
  templateUrl: './ex05-nomes.component.html',
  styleUrl: './ex05-nomes.component.css',
})
export class Ex05NomesComponent {
  nomes = ['Ana Beatriz', 'Bruno Carvalho', 'Carla Menezes', 'Daniel Rocha', 'Eduarda Lima'];
}
