export type Prioridade = 'baixa' | 'media' | 'alta';

export interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: Prioridade;
  concluida: boolean;
}
