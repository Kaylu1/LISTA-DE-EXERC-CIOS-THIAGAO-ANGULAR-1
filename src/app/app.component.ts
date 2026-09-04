import { Component } from '@angular/core';

interface ItemMenu {
  numero: number;
  titulo: string;
  nivel: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  exercicios: ItemMenu[] = [
    { numero: 1, titulo: 'Apresentação do usuário', nivel: 'Básico' },
    { numero: 2, titulo: 'Calculando com Interpolation', nivel: 'Básico' },
    { numero: 3, titulo: 'Imagem dinâmica', nivel: 'Básico' },
    { numero: 4, titulo: 'Botão habilitado ou desabilitado', nivel: 'Intermediário' },
    { numero: 5, titulo: 'Contador de curtidas', nivel: 'Básico' },
    { numero: 6, titulo: 'Contador completo', nivel: 'Intermediário' },
    { numero: 7, titulo: 'Nome em tempo real', nivel: 'Básico' },
    { numero: 8, titulo: 'Cadastro de produto', nivel: 'Intermediário' },
    { numero: 9, titulo: 'Controle de estoque', nivel: 'Intermediário' },
    { numero: 10, titulo: 'Login simulado', nivel: 'Avançado' },
    { numero: 11, titulo: 'Carrinho de compras', nivel: 'Avançado' },
    { numero: 12, titulo: 'Desafio final — Matrícula em curso', nivel: 'Desafio' }
  ];

  exercicioAtual = 1;

  abrir(numero: number): void {
    this.exercicioAtual = numero;
  }
}
