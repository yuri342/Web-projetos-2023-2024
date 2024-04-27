function soma() {
  var valor1 = parseFloat(document.getElementById("v1").value);
  var valor2 = parseFloat(document.getElementById("v2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  var resultado = valor1 + valor2;
  document.getElementById("Resposta").innerText = "Resultado: " + resultado;
}

function subtrair() {
  var valor1 = parseFloat(document.getElementById("v1").value);
  var valor2 = parseFloat(document.getElementById("v2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  var resultado = valor1 - valor2;
  document.getElementById("Resposta").innerText = "Resultado: " + resultado;
}

function dividir() {
  var valor1 = parseFloat(document.getElementById("v1").value);
  var valor2 = parseFloat(document.getElementById("v2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  if (valor2 === 0) {
    alert("Não é possível dividir por zero.");
    return;
  }

  var resultado = valor1 / valor2;
  document.getElementById("Resposta").innerText = "Resultado: " + resultado;
}

function multiplicar() {
  var valor1 = parseFloat(document.getElementById("v1").value);
  var valor2 = parseFloat(document.getElementById("v2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  var resultado = valor1 * valor2;
  document.getElementById("Resposta").innerText = "Resultado: " + resultado;
}
