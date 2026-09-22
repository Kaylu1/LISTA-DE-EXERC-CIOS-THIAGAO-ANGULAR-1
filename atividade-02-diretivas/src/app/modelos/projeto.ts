export type StatusProjeto = 'planejamento' | 'desenvolvimento' | 'testes' | 'concluido';

export interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  /** Recebe null enquanto a nota nao for lancada. */
  nota: number | null;
  status: StatusProjeto;
  entregue: boolean;
}
