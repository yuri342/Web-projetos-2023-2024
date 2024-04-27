var BotaoAdicionar = document.getElementsByClassName("BotaoAdiconar");
var PedidoslistaUsuario = document.getElementById("Cpl");
var PluF = PedidoslistaUsuario.querySelector('.BotaoAdiconar');

for (let a = 1; a < 17; a++) {
  const lia = document.getElementById("" + a);
  let child = lia.querySelector('.BotaoAdiconar');

  child.addEventListener("click", function () {
    const clone = lia.cloneNode(true);
    PedidoslistaUsuario.appendChild(clone);

    // Modifica o botão no clone
    var botaoNoClone = clone.querySelector('.BotaoAdiconar');
    if (botaoNoClone) {
      botaoNoClone.textContent = "Remover";
      botaoNoClone.addEventListener("click", function () {
        PedidoslistaUsuario.removeChild(clone);
        // Você pode adicionar lógica adicional aqui se necessário
      });
    }
  });
}



