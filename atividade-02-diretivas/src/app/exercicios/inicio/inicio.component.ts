import { Component } from '@angular/core';

/** Tela de abertura com o resumo da atividade. */
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  readonly etapas = [
    {
      nome: 'Etapa 1 · Condições e eventos',
      descricao: 'Exercícios 1 a 4: event binding, ngIf, else e property binding.',
    },
    {
      nome: 'Etapa 2 · Repetições e listas',
      descricao: 'Exercícios 5 a 7: ngFor com index, first, last, even, odd e ngClass.',
    },
    {
      nome: 'Etapa 3 · Objetos e estilos dinâmicos',
      descricao: 'Exercícios 8 a 11: interfaces, pipe currency, ngClass, ngStyle e ng-container.',
    },
    {
      nome: 'Etapa 4 · Interação e integração',
      descricao: 'Exercícios 12 a 14: ngModel, validações e conversão para @if e @for.',
    },
    {
      nome: 'Desafio final · Painel de projetos',
      descricao: 'Tela completa de acompanhamento construída com @if, @for, @empty e track.',
    },
  ];
}
