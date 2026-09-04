# Lista de Exercícios — Data Binding no Angular

Resolução da lista de exercícios de Data Binding do professor Thiago Paiva.

## Como executar

```bash
npm install
npm start
```

A aplicação sobe em `http://localhost:4200`. O menu lateral alterna entre os exercícios.

## Estrutura

Cada exercício é um componente próprio dentro de `src/app/exercicios`:

| # | Componente | Bindings praticados |
|---|---|---|
| 1 | `apresentacao` | Interpolation |
| 2 | `calculo` | Interpolation + pipe `currency` |
| 3 | `imagem-dinamica` | Property Binding (`src`, `alt`) |
| 4 | `botao-salvar` | Property Binding (`disabled`) |
| 5 | `curtidas` | Event Binding |
| 6 | `contador` | Interpolation + Event + Property |
| 7 | `nome-tempo-real` | Two-Way Binding |
| 8 | `cadastro-produto` | Two-Way Binding + Interpolation |
| 9 | `estoque` | Todos os bindings |
| 10 | `login` | Todos os bindings |
| 11 | `carrinho` | Todos os bindings |
| 12 | `matricula` | Desafio final |

`FormsModule` é importado em `src/app/app.module.ts` para habilitar `[(ngModel)]`.
O locale `pt-BR` e a moeda `BRL` também são registrados ali, para o pipe `currency`
formatar os valores como `R$ 450,00`.
