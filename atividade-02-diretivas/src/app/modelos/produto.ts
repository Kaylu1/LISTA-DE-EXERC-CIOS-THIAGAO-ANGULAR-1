export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  /** Campo acrescentado no exercicio 10. */
  promocao?: boolean;
}
