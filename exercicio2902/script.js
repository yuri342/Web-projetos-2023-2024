document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll("#calculadora button");
  let calculo = "0";

  botoes.forEach(botao => {
    botao.addEventListener("click", function (evento) {
      const valor = evento.target.value;
      if (valor === "AC") {
        limparCalculadora();
      } else if (valor === "=") {
        calcularResultado();
      } else {
        adicionarAoCalculo(valor);
      }
      atualizarVisor();
    });
  });

  function limparCalculadora() {
    calculo = "0";
  }

  function adicionarAoCalculo(valor) {
    if (calculo === "0" || calculo === "Erro") {
      calculo = valor;
    } else {
      calculo += valor;
    }
  }

  function calcularResultado() {
    try {
      calculo = eval(calculo).toString();
    } catch (erro) {
      calculo = "Erro";
    }
  }

  function atualizarVisor() {
    document.getElementById("R").textContent = calculo;
  }
});

