/* Código desenvolvido corretamente */
/* Nota: 2.0 */

class Empregado {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  getSalario() {
    return this.salario;
  }

  setSalario(salario) {
    if (salario < 0) {
      console.log("Salário não pode ser negativo.");
      return;
    }

    this.salario = salario;
  }


  static somaSalarios(empregados) {
    const soma = empregados.reduce((a, b) => a + b.getSalario(), 0);
    return soma;
  }
}

const empregado1 = new Empregado("João da Silva", 1000);
const empregado2 = new Empregado("Maria da Silva", 2000);

console.log("Salário de João:", empregado1.getSalario());
console.log("Salário de Maria:", empregado2.getSalario());

empregado1.setSalario(empregado1.getSalario() * 1.1);
empregado2.setSalario(empregado2.getSalario() * 1.1);

console.log("Salário de João após aumento:", empregado1.getSalario());
console.log("Salário de Maria 2 após aumento:", empregado2.getSalario());

const empregados = [empregado1, empregado2];
const somaSalarios = Empregado.somaSalarios(empregados);

console.log("Soma dos salários de João e Maria", somaSalarios);
