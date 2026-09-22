import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciciosModule } from '../exercicios-module';
import { Ex12CadastroComponent } from './ex12-cadastro.component';

/** Digita um valor no campo e avisa o ngModel. */
async function digitar(
  fixture: ComponentFixture<Ex12CadastroComponent>,
  seletor: string,
  valor: string,
): Promise<void> {
  const campo = (fixture.nativeElement as HTMLElement).querySelector(seletor) as HTMLInputElement;
  campo.value = valor;
  campo.dispatchEvent(new Event('input'));
  await fixture.whenStable();
}

function clicarEmCadastrar(fixture: ComponentFixture<Ex12CadastroComponent>): void {
  const elemento = fixture.nativeElement as HTMLElement;
  const botao = Array.from(elemento.querySelectorAll('button')).find(
    (item) => item.textContent?.trim() === 'Cadastrar',
  )!;
  botao.click();
}

describe('Exercício 12 · Cadastro simplificado', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExerciciosModule] }).compileComponents();
  });

  it('cadastra o produto digitado, limpa os campos e atualiza a listagem', async () => {
    const fixture = TestBed.createComponent(Ex12CadastroComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(2);

    await digitar(fixture, '#campo-nome', 'Cadeira gamer');
    await digitar(fixture, '#campo-quantidade', '7');

    // Confirma que o ngModel levou o valor do campo para o componente.
    expect(componente.nomeInformado).toBe('Cadeira gamer');
    expect(componente.quantidadeInformada).toBe(7);

    clicarEmCadastrar(fixture);
    await fixture.whenStable();

    expect(componente.produtos.length).toBe(3);
    expect(elemento.querySelectorAll('ul.lista > li').length).toBe(3);
    expect(elemento.textContent).toContain('Cadeira gamer');

    // Requisito 4: os campos ficam limpos depois do cadastro.
    expect(componente.nomeInformado).toBe('');
    expect(componente.quantidadeInformada).toBeNull();
    expect((elemento.querySelector('#campo-nome') as HTMLInputElement).value).toBe('');
    expect(elemento.querySelector('.aviso')).toBeNull();
  });

  it('recusa o cadastro sem nome e mostra a mensagem na tela', async () => {
    const fixture = TestBed.createComponent(Ex12CadastroComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    await digitar(fixture, '#campo-nome', '   ');
    await digitar(fixture, '#campo-quantidade', '4');

    clicarEmCadastrar(fixture);
    await fixture.whenStable();

    expect(componente.produtos.length).toBe(2);
    expect(elemento.querySelector('.aviso')?.textContent?.trim()).toBe('Informe o nome do produto.');
  });

  it('recusa o cadastro com quantidade negativa ou vazia', async () => {
    const fixture = TestBed.createComponent(Ex12CadastroComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    await digitar(fixture, '#campo-nome', 'Cadeira gamer');
    await digitar(fixture, '#campo-quantidade', '-1');
    clicarEmCadastrar(fixture);
    await fixture.whenStable();

    expect(componente.produtos.length).toBe(2);
    expect(elemento.querySelector('.aviso')?.textContent).toContain('quantidade');

    await digitar(fixture, '#campo-quantidade', '');
    clicarEmCadastrar(fixture);
    await fixture.whenStable();

    expect(componente.produtos.length).toBe(2);
    expect(elemento.querySelector('.aviso')?.textContent).toContain('quantidade');
  });

  it('aceita quantidade igual a zero', async () => {
    const fixture = TestBed.createComponent(Ex12CadastroComponent);
    const componente = fixture.componentInstance;
    await fixture.whenStable();

    await digitar(fixture, '#campo-nome', 'Mesa de escritório');
    await digitar(fixture, '#campo-quantidade', '0');
    clicarEmCadastrar(fixture);
    await fixture.whenStable();

    expect(componente.produtos.length).toBe(3);
    expect(componente.mensagemErro).toBe('');
  });

  it('exclui o produto escolhido e mostra a mensagem de lista vazia', async () => {
    const fixture = TestBed.createComponent(Ex12CadastroComponent);
    const componente = fixture.componentInstance;
    const elemento = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const excluirPrimeiro = () => {
      const botao = Array.from(elemento.querySelectorAll('ul.lista button')).find(
        (item) => item.textContent?.trim() === 'Excluir',
      ) as HTMLButtonElement;
      botao.click();
    };

    excluirPrimeiro();
    await fixture.whenStable();
    expect(componente.produtos.length).toBe(1);

    excluirPrimeiro();
    await fixture.whenStable();
    expect(componente.produtos.length).toBe(0);
    expect(elemento.querySelector('.vazio')?.textContent?.trim()).toBe('Nenhum produto cadastrado');
  });
});
