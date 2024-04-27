function classificarIMCMasculino(imc) {
  if (imc < 21.9) {
    return "Abaixo do peso";
  } else if (imc <= 27.0) {
    return "Peso normal";
  } else if (imc <= 32.0) {
    return "Sobrepeso";
  } else if (imc <= 37.0) {
    return "Obesidade grau I";
  } else if (imc <= 41.9) {
    return "Obesidade grau II (severa)";
  } else {
    return "Obesidade grau III (mórbida)";
  }
}

function classificarIMCFeminino(imc) {
  if (imc < 21.9) {
    return "Abaixo do peso";
  } else if (imc <= 27.0) {
    return "Peso normal";
  } else if (imc <= 30.0) {
    return "Sobrepeso";
  } else if (imc <= 35.0) {
    return "Obesidade grau I";
  } else if (imc <= 39.9) {
    return "Obesidade grau II (severa)";
  } else {
    return "Obesidade grau III (mórbida)";
  }
}

function verGrau() {
  let b = event.target;
  var s = b.parentNode.innerText;

  if ((s = "Masculino")) {
    console.log("ok");
  }
}
function b2() {
  document.getElementById("PESO").value = "";
  document.getElementById("ALTURA").value = "";
  var sexos = document.getElementsByClassName("sexo");
  for (var i = 0; i < sexos.length; i++) {
    sexos[i].checked = false;
  }
  document.getElementById("imcRes").innerText = "IMC";
  document.getElementById("GrauRes").innerText = "Grau";
  document.getElementById("Resultado").style.display = "none";
}

function b1() {
  let peso = document.getElementById("PESO").value;
  let altura = document.getElementById("ALTURA").value;

  if (
    isNaN(peso) ||
    isNaN(altura) ||
    altura == 0 ||
    peso == "" ||
    altura == ""
  ) {
    console.log("INVALIDO");
    alert(
      "Os valores de peso e altura devem ser numéricos e altura não pode ser zero."
    );
  } else {
    let sexoSelecionado = document.querySelector(
      'input[name="sexo"]:checked'
    ).value;
    let calc = peso / (altura * altura);
    console.log("IMC: " + calc.toFixed(2));
    document.getElementById("imcRes").innerText = calc.toFixed(2);

    // Correção nas condições de comparação
    if (sexoSelecionado === "M") {
      console.log(sexoSelecionado);
      console.log(classificarIMCMasculino(calc));
      document.getElementById("GrauRes").innerText =
        classificarIMCMasculino(calc);
    } else if (sexoSelecionado === "F") {
      console.log(sexoSelecionado);
      console.log(classificarIMCFeminino(calc));
      document.getElementById("GrauRes").innerText =
        classificarIMCFeminino(calc);
    } else {
      throw new Error("Sexo Não Escolhido");
    }
    document.getElementById("Resultado").style.display = "block";
  }
}

var b1 = document.getElementById("calc").addEventListener("click", b1);
var b2 = document.getElementById("limp").addEventListener("click", b2);
