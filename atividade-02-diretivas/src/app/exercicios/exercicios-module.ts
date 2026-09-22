import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InicioComponent } from './inicio/inicio.component';
import { Ex01MensagemComponent } from './ex01-mensagem/ex01-mensagem.component';
import { Ex02UsuarioComponent } from './ex02-usuario/ex02-usuario.component';
import { Ex03IdadeComponent } from './ex03-idade/ex03-idade.component';
import { Ex04EstoqueComponent } from './ex04-estoque/ex04-estoque.component';
import { Ex05NomesComponent } from './ex05-nomes/ex05-nomes.component';
import { Ex06ListaVaziaComponent } from './ex06-lista-vazia/ex06-lista-vazia.component';
import { Ex07DisciplinasComponent } from './ex07-disciplinas/ex07-disciplinas.component';
import { Ex08ProdutosComponent } from './ex08-produtos/ex08-produtos.component';
import { Ex09ClassificacaoComponent } from './ex09-classificacao/ex09-classificacao.component';
import { Ex10PromocaoComponent } from './ex10-promocao/ex10-promocao.component';
import { Ex11DisponiveisComponent } from './ex11-disponiveis/ex11-disponiveis.component';
import { Ex12CadastroComponent } from './ex12-cadastro/ex12-cadastro.component';
import { Ex13TarefasComponent } from './ex13-tarefas/ex13-tarefas.component';
import { Ex14SintaxeModernaComponent } from './ex14-sintaxe-moderna/ex14-sintaxe-moderna.component';
import { DesafioPainelComponent } from './desafio-painel/desafio-painel.component';

/**
 * Reune todos os componentes da lista de exercicios.
 * Nenhum componente e standalone: todos sao declarados neste modulo.
 */
@NgModule({
  declarations: [
    InicioComponent,
    Ex01MensagemComponent,
    Ex02UsuarioComponent,
    Ex03IdadeComponent,
    Ex04EstoqueComponent,
    Ex05NomesComponent,
    Ex06ListaVaziaComponent,
    Ex07DisciplinasComponent,
    Ex08ProdutosComponent,
    Ex09ClassificacaoComponent,
    Ex10PromocaoComponent,
    Ex11DisponiveisComponent,
    Ex12CadastroComponent,
    Ex13TarefasComponent,
    Ex14SintaxeModernaComponent,
    DesafioPainelComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    InicioComponent,
    Ex01MensagemComponent,
    Ex02UsuarioComponent,
    Ex03IdadeComponent,
    Ex04EstoqueComponent,
    Ex05NomesComponent,
    Ex06ListaVaziaComponent,
    Ex07DisciplinasComponent,
    Ex08ProdutosComponent,
    Ex09ClassificacaoComponent,
    Ex10PromocaoComponent,
    Ex11DisponiveisComponent,
    Ex12CadastroComponent,
    Ex13TarefasComponent,
    Ex14SintaxeModernaComponent,
    DesafioPainelComponent,
  ],
})
export class ExerciciosModule {}
