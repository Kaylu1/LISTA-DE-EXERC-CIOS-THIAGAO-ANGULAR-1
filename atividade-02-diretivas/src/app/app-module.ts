import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing-module';
import { ExerciciosModule } from './exercicios/exercicios-module';
import { App } from './app';

// Necessario para o pipe currency formatar os valores em reais.
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ExerciciosModule],
  providers: [provideBrowserGlobalErrorListeners(), { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [App],
})
export class AppModule {}
