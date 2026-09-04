import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem-dinamica',
  standalone: false,
  templateUrl: './imagem-dinamica.component.html'
})
export class ImagemDinamicaComponent {
  imagemProduto = 'teclado-mecanico.svg';
  descricaoImagem = 'Teclado mecânico com teclas retroiluminadas';
}
