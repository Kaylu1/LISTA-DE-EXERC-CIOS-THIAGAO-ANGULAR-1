import { LOCALE_ID, NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './exercicios/apresentacao/apresentacao.component';
import { CalculoComponent } from './exercicios/calculo/calculo.component';
import { ImagemDinamicaComponent } from './exercicios/imagem-dinamica/imagem-dinamica.component';
import { BotaoSalvarComponent } from './exercicios/botao-salvar/botao-salvar.component';
import { CurtidasComponent } from './exercicios/curtidas/curtidas.component';
import { ContadorComponent } from './exercicios/contador/contador.component';
import { NomeTempoRealComponent } from './exercicios/nome-tempo-real/nome-tempo-real.component';
import { CadastroProdutoComponent } from './exercicios/cadastro-produto/cadastro-produto.component';
import { EstoqueComponent } from './exercicios/estoque/estoque.component';
import { LoginComponent } from './exercicios/login/login.component';
import { CarrinhoComponent } from './exercicios/carrinho/carrinho.component';
import { MatriculaComponent } from './exercicios/matricula/matricula.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    CalculoComponent,
    ImagemDinamicaComponent,
    BotaoSalvarComponent,
    CurtidasComponent,
    ContadorComponent,
    NomeTempoRealComponent,
    CadastroProdutoComponent,
    EstoqueComponent,
    LoginComponent,
    CarrinhoComponent,
    MatriculaComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
