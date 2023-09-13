const soma = document.getElementById("soma");
const resposta = document.getElementById("resposta");

soma.addEventListener("click", () => {
  const prompt1 = window.prompt("Digite um número");
  const prompt2 = window.prompt("Digite outro número");

  const a = Number(prompt1);
  const b = Number(prompt2);

  const resultado = a + b;
  resposta.innerHTML = `A soma dos números ${a} e ${b} é: ${resultado}`;
});
