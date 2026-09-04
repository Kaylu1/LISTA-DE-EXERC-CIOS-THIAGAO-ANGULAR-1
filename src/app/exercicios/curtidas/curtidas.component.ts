import { Component } from '@angular/core';

@Component({
  selector: 'app-curtidas',
  standalone: false,
  templateUrl: './curtidas.component.html'
})
export class CurtidasComponent {
  curtidas = 0;

  curtir(): void {
    this.curtidas++;
  }
}
