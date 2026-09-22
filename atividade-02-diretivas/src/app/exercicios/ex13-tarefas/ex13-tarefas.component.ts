import { Component } from '@angular/core';
import { Tarefa } from '../../modelos/tarefa';

/**
 * Exercicio 13 - Lista de tarefas.
 * Conceitos trabalhados: integracao das diretivas estudadas.
 */
@Component({
  selector: 'app-ex13-tarefas',
  standalone: false,
  templateUrl: './ex13-tarefas.component.html',
  styleUrl: './ex13-tarefas.component.css',
})
export class Ex13TarefasComponent {
  private readonly tarefasIniciais: Tarefa[] = [
    { id: 1, titulo: 'Levantar os requisitos', responsavel: 'Ana Beatriz', prioridade: 'alta', concluida: true },
    { id: 2, titulo: 'Modelar o banco de dados', responsavel: 'Bruno Carvalho', prioridade: 'alta', concluida: false },
    { id: 3, titulo: 'Criar o protótipo das telas', responsavel: 'Carla Menezes', prioridade: 'media', concluida: true },
    { id: 4, titulo: 'Implementar o cadastro', responsavel: 'Daniel Rocha', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Escrever a documentação', responsavel: 'Eduarda Lima', prioridade: 'baixa', concluida: false },
    { id: 6, titulo: 'Preparar a apresentação', responsavel: 'Felipe Andrade', prioridade: 'media', concluida: false },
  ];

  tarefas: Tarefa[] = this.clonarTarefasIniciais();

  alternarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  limparTarefas(): void {
    this.tarefas = [];
  }

  restaurarTarefas(): void {
    this.tarefas = this.clonarTarefasIniciais();
  }

  /** Classe CSS aplicada conforme a prioridade. */
  definirClassePrioridade(tarefa: Tarefa): string {
    return 'prioridade-' + tarefa.prioridade;
  }

  /** Texto da prioridade escrito por extenso. */
  descreverPrioridade(tarefa: Tarefa): string {
    if (tarefa.prioridade === 'alta') {
      return 'Alta';
    }
    if (tarefa.prioridade === 'media') {
      return 'Média';
    }
    return 'Baixa';
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter((tarefa) => tarefa.concluida).length;
  }

  get totalPendentes(): number {
    return this.totalTarefas - this.totalConcluidas;
  }

  private clonarTarefasIniciais(): Tarefa[] {
    return this.tarefasIniciais.map((tarefa) => ({ ...tarefa }));
  }
}
