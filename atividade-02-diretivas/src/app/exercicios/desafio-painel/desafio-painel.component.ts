import { Component } from '@angular/core';
import { Projeto, StatusProjeto } from '../../modelos/projeto';

/**
 * Desafio final - Painel de projetos.
 * Versao desenvolvida com o controle de fluxo moderno (@if, @for, @empty e track).
 */
@Component({
  selector: 'app-desafio-painel',
  standalone: false,
  templateUrl: './desafio-painel.component.html',
  styleUrl: './desafio-painel.component.css',
})
export class DesafioPainelComponent {
  /** Status permitidos no painel. */
  readonly statusPermitidos: StatusProjeto[] = [
    'planejamento',
    'desenvolvimento',
    'testes',
    'concluido',
  ];

  private readonly projetosIniciais: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de controle de frotas',
      equipe: 'Ana Beatriz, Bruno Carvalho',
      nota: 9,
      status: 'concluido',
      entregue: true,
    },
    {
      id: 2,
      titulo: 'Aplicativo de agendamento clínico',
      equipe: 'Carla Menezes, Daniel Rocha',
      nota: 7.5,
      status: 'testes',
      entregue: true,
    },
    {
      id: 3,
      titulo: 'Portal de estágios',
      equipe: 'Eduarda Lima, Felipe Andrade',
      nota: 5.5,
      status: 'desenvolvimento',
      entregue: false,
    },
    {
      id: 4,
      titulo: 'Plataforma de doações',
      equipe: 'Gabriel Souza, Helena Martins',
      nota: null,
      status: 'planejamento',
      entregue: false,
    },
    {
      id: 5,
      titulo: 'Painel de indicadores acadêmicos',
      equipe: 'Igor Nascimento, Júlia Prado',
      nota: 6.5,
      status: 'desenvolvimento',
      entregue: false,
    },
    {
      id: 6,
      titulo: 'Loja virtual do curso',
      equipe: 'Karina Alves, Lucas Ferreira',
      nota: 8,
      status: 'concluido',
      entregue: true,
    },
  ];

  projetos: Projeto[] = this.clonarProjetosIniciais();

  /** Requisito 9: controla a exibicao dos projetos concluidos. */
  mostrarConcluidos = true;

  /** Lista efetivamente exibida na tela, conforme o filtro escolhido. */
  get projetosVisiveis(): Projeto[] {
    if (this.mostrarConcluidos) {
      return this.projetos;
    }
    return this.projetos.filter((projeto) => projeto.status !== 'concluido');
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter((projeto) => projeto.status === 'concluido').length;
  }

  get totalEntregues(): number {
    return this.projetos.filter((projeto) => projeto.entregue).length;
  }

  alternarExibicaoConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  /** Requisito 10: altera o status de um projeto. */
  alterarStatus(projeto: Projeto, novoStatus: StatusProjeto): void {
    projeto.status = novoStatus;
  }

  /** Classe CSS diferente para cada status. */
  definirClasseStatus(projeto: Projeto): string {
    return 'status-' + projeto.status;
  }

  /** Nome do status escrito para o usuario. */
  descreverStatus(status: StatusProjeto): string {
    if (status === 'planejamento') {
      return 'Planejamento';
    }
    if (status === 'desenvolvimento') {
      return 'Desenvolvimento';
    }
    if (status === 'testes') {
      return 'Testes';
    }
    return 'Concluído';
  }

  /** Requisito 7: projetos com nota igual ou superior a 7. */
  temNotaDestaque(projeto: Projeto): boolean {
    return projeto.nota !== null && projeto.nota >= 7;
  }

  /** Requisito 8: projetos com nota inferior a 6. */
  temNotaAbaixoDaMedia(projeto: Projeto): boolean {
    return projeto.nota !== null && projeto.nota < 6;
  }

  limparPainel(): void {
    this.projetos = [];
  }

  restaurarPainel(): void {
    this.projetos = this.clonarProjetosIniciais();
  }

  private clonarProjetosIniciais(): Projeto[] {
    return this.projetosIniciais.map((projeto) => ({ ...projeto }));
  }
}
