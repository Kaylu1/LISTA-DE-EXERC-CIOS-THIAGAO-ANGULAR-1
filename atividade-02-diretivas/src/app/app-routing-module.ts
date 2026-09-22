import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './exercicios/inicio/inicio.component';
import { Ex01MensagemComponent } from './exercicios/ex01-mensagem/ex01-mensagem.component';
import { Ex02UsuarioComponent } from './exercicios/ex02-usuario/ex02-usuario.component';
import { Ex03IdadeComponent } from './exercicios/ex03-idade/ex03-idade.component';
import { Ex04EstoqueComponent } from './exercicios/ex04-estoque/ex04-estoque.component';
import { Ex05NomesComponent } from './exercicios/ex05-nomes/ex05-nomes.component';
import { Ex06ListaVaziaComponent } from './exercicios/ex06-lista-vazia/ex06-lista-vazia.component';
import { Ex07DisciplinasComponent } from './exercicios/ex07-disciplinas/ex07-disciplinas.component';
import { Ex08ProdutosComponent } from './exercicios/ex08-produtos/ex08-produtos.component';
import { Ex09ClassificacaoComponent } from './exercicios/ex09-classificacao/ex09-classificacao.component';
import { Ex10PromocaoComponent } from './exercicios/ex10-promocao/ex10-promocao.component';
import { Ex11DisponiveisComponent } from './exercicios/ex11-disponiveis/ex11-disponiveis.component';
import { Ex12CadastroComponent } from './exercicios/ex12-cadastro/ex12-cadastro.component';
import { Ex13TarefasComponent } from './exercicios/ex13-tarefas/ex13-tarefas.component';
import { Ex14SintaxeModernaComponent } from './exercicios/ex14-sintaxe-moderna/ex14-sintaxe-moderna.component';
import { DesafioPainelComponent } from './exercicios/desafio-painel/desafio-painel.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'exercicio-1', component: Ex01MensagemComponent },
  { path: 'exercicio-2', component: Ex02UsuarioComponent },
  { path: 'exercicio-3', component: Ex03IdadeComponent },
  { path: 'exercicio-4', component: Ex04EstoqueComponent },
  { path: 'exercicio-5', component: Ex05NomesComponent },
  { path: 'exercicio-6', component: Ex06ListaVaziaComponent },
  { path: 'exercicio-7', component: Ex07DisciplinasComponent },
  { path: 'exercicio-8', component: Ex08ProdutosComponent },
  { path: 'exercicio-9', component: Ex09ClassificacaoComponent },
  { path: 'exercicio-10', component: Ex10PromocaoComponent },
  { path: 'exercicio-11', component: Ex11DisponiveisComponent },
  { path: 'exercicio-12', component: Ex12CadastroComponent },
  { path: 'exercicio-13', component: Ex13TarefasComponent },
  { path: 'exercicio-14', component: Ex14SintaxeModernaComponent },
  { path: 'desafio-final', component: DesafioPainelComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
