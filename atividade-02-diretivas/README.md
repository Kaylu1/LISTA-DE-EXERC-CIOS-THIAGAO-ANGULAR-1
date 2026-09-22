# Lista de Exercícios sobre Diretivas no Angular

Atividade prática em sala de aula. O projeto reúne os 14 exercícios da lista e o desafio final,
cada um em um componente próprio, acessível pelo menu lateral da aplicação.

| | |
| --- | --- |
| **Aluno** | Caio Eduardo Sapata Bruno |
| **R.A.** | 270667 |
| **Turma** | 3 A |
| **Data** | 22/09/2026 |

## Como o projeto foi criado

```bash
ng new atividade-diretivas --no-standalone --routing --ssr=false
```

Os componentes são configurados com módulos: nenhum deles é `standalone`. Todos são declarados em
`ExerciciosModule` e as rotas ficam em `AppRoutingModule`.

## Como executar

```bash
npm install
npm start
```

A aplicação fica disponível em `http://localhost:4200`.

Para executar os testes:

```bash
npm test
```

## Exercícios implementados

| # | Exercício | Rota | Diretivas e recursos |
| --- | --- | --- | --- |
| 1 | Exibição de mensagem | `/exercicio-1` | event binding, `*ngIf` |
| 2 | Situação do usuário | `/exercicio-2` | `*ngIf` com `else` e `ng-template` |
| 3 | Verificação de idade | `/exercicio-3` | condições encadeadas, event binding, `ngClass` |
| 4 | Situação do estoque | `/exercicio-4` | `*ngIf`, property binding (`[disabled]`) |
| 5 | Lista de nomes | `/exercicio-5` | `*ngFor` com `index`, `first` e `last` |
| 6 | Tratamento de lista vazia | `/exercicio-6` | `*ngIf` combinado com `*ngFor` |
| 7 | Cores alternadas | `/exercicio-7` | `*ngFor` com `even`, `odd` e `ngClass` |
| 8 | Lista de produtos | `/exercicio-8` | interface `Produto`, interpolação, pipe `currency` |
| 9 | Classificação dos produtos | `/exercicio-9` | condições encadeadas, `ngClass` |
| 10 | Promoção e estilo dinâmico | `/exercicio-10` | `*ngIf`, `ngStyle`, eventos com objetos |
| 11 | Somente produtos disponíveis | `/exercicio-11` | `ng-container` combinando `*ngFor` e `*ngIf` |
| 12 | Cadastro simplificado | `/exercicio-12` | `ngModel`, validações, `*ngIf` e `*ngFor` |
| 13 | Lista de tarefas | `/exercicio-13` | integração das diretivas estudadas |
| 14 | Conversão para a sintaxe moderna | `/exercicio-14` | `@if`, `@else`, `@for`, `@empty` e `track` |
| — | **Desafio final: painel de projetos** | `/desafio-final` | versão completa com `@if`, `@for` e `track projeto.id` |

Os exercícios 1 a 13 usam a sintaxe tradicional (`*ngIf` e `*ngFor`), conforme as orientações da
lista. O exercício 14 e o desafio final usam a sintaxe moderna de controle de fluxo.

## Estrutura de pastas

```
src/app/
├── app.ts                       componente raiz com o menu de navegação
├── app-module.ts                módulo raiz, registra o locale pt-BR
├── app-routing-module.ts        rotas de todos os exercícios
├── modelos/                     interfaces Produto, Tarefa e Projeto
└── exercicios/
    ├── exercicios-module.ts     declara todos os componentes da lista
    ├── inicio/
    ├── ex01-mensagem/ ... ex14-sintaxe-moderna/
    └── desafio-painel/
```

## Observações sobre o exercício 14

As duas diferenças percebidas entre as sintaxes estão descritas na própria tela do exercício 14,
ao final da página:

1. O controle de fluxo passou a fazer parte do próprio template. `*ngIf` e `*ngFor` são diretivas
   que dependem do `CommonModule`, e o caso contrário do `else` exige um `ng-template` declarado à
   parte. Com `@if` e `@else` nada disso é necessário.
2. O `@for` resolve sozinho o que antes precisava de código extra: o `track` é obrigatório, o que
   evita a recriação dos elementos da lista, e o bloco `@empty` já trata a lista vazia, dispensando
   o `*ngIf` adicional.

## Testes

O projeto inclui testes que verificam os requisitos de cada exercício pela interface, simulando os
cliques e a digitação do usuário.

```bash
npm test
```
