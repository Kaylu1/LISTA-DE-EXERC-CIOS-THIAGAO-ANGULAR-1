import { Component } from '@angular/core';

@Component({
  selector: 'app-matricula',
  standalone: false,
  templateUrl: './matricula.component.html'
})
export class MatriculaComponent {
  aluno = '';
  disciplinas = 1;
  comprovante = '';

  get nomePreenchido(): boolean {
    return this.aluno.trim().length > 0;
  }

  aumentar(): void {
    this.disciplinas++;
  }

  diminuir(): void {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  realizarMatricula(): void {
    this.comprovante = `${this.aluno} foi matriculado(a) em ${this.disciplinas} disciplina(s).`;
  }
}
