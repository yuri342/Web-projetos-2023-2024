function Contador_Turno_Jogadas(CT) {
  if (CT % 2 == 0) {
    console.log("J1 J");
    return 1;
  } else {
    console.log("J2 J");
    return 2;
  }
}

function registrarJogada(linha, coluna, jogador) {
  if (tabuleiro[linha][coluna] === "n") {
    tabuleiro[linha][coluna] = jogador === 1 ? "J1" : "J2";
    console.log(
      `Jogador ${jogador} fez uma jogada em (${linha + 1}, ${coluna + 1})`
    );
  } else {
    console.log("Posição já ocupada. Escolha outra.");
  }
}

function verificarVitoria(jogador) {
  // Verificar linhas
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] === jogador &&
      tabuleiro[i][1] === jogador &&
      tabuleiro[i][2] === jogador
    ) {
      return true; // Vitória na linha
    }
  }

  // Verificar colunas
  for (let j = 0; j < 3; j++) {
    if (
      tabuleiro[0][j] === jogador &&
      tabuleiro[1][j] === jogador &&
      tabuleiro[2][j] === jogador
    ) {
      return true; // Vitória na coluna
    }
  }

  // Verificar diagonais
  if (
    (tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador) ||
    (tabuleiro[0][2] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][0] === jogador)
  ) {
    return true; // Vitória na diagonal
  }

  return false; // Nenhuma vitória
}
//var em geral//
let CT = 1;
// array com os IDs dos elementos
var linha1 = [
  (i10 = document.getElementById("i10")),
  (i11 = document.getElementById("i11")),
  (i12 = document.getElementById("i12")),
];
var linha2 = [
  (i13 = document.getElementById("i13")),
  (i14 = document.getElementById("i14")),
  (i15 = document.getElementById("i15")),
];
var linha3 = [
  (i16 = document.getElementById("i16")),
  (i17 = document.getElementById("i17")),
  (i18 = document.getElementById("i18")),
];
//Tabuleiro em variavel
let tabuleiro = [
  ["n", "n", "n"],
  ["n", "n", "n"],
  ["n", "n", "n"],
];
//função atribuida  aos ids
// Adicionar evento de clique às células do tabuleiro
for (let i = 0; i < 3; i++) {
  linha1[i].addEventListener("click", function () {
    registrarJogada(0, i, Contador_Turno_Jogadas(CT));
    if (verificarVitoria(Contador_Turno_Jogadas(CT))) {
      console.log(`Jogador ${Contador_Turno_Jogadas(CT)} venceu!`);
      // Adicione aqui a lógica adicional, como reiniciar o jogo
    }
    CT++;
  });
  linha2[i].addEventListener("click", function () {
    registrarJogada(1, i, Contador_Turno_Jogadas(CT));
    if (verificarVitoria(Contador_Turno_Jogadas(CT))) {
      console.log(`Jogador ${Contador_Turno_Jogadas(CT)} venceu!`);
      // Adicione aqui a lógica adicional, como reiniciar o jogo
    }
    CT++;
  });
  linha3[i].addEventListener("click", function () {
    registrarJogada(2, i, Contador_Turno_Jogadas(CT));  
    if (verificarVitoria(Contador_Turno_Jogadas(CT))) {
      console.log(`Jogador ${Contador_Turno_Jogadas(CT)} venceu!`);
      // Adicione aqui a lógica adicional, como reiniciar o jogo
    }
    CT++;
  });
}
