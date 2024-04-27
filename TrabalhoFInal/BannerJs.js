// Espera até que todo o conteúdo do documento HTML seja carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Obtém a referência do elemento HTML com o id 'BannerJs'
  const banner = document.getElementById("BannerJs");
  //variaveis dos botoes//
  let BB1 = document.getElementById("BB1");
  let BB2 = document.getElementById("BB2");
  var botaoAtivado = true;
  // Array de nomes de imagens
  const imagens = ["1.png", "2.png", "3.png", "4.png"];

  // Variável para rastrear a posição atual da imagem
  let imagemAtual = 0;
  //variavel para tempo//
  let intervalo = 5000;

  // Função para mudar a imagem de fundo do banner com transição
  function mudarImagem() {
    banner.style.backgroundImage = `url(${imagens[imagemAtual]})`;
    // Ajuste esse valor para coincidir com a duração da transição CSS
  }

  // Função para avançar para a próxima imagem no array
  function nextSlide() {
    // Incrementa a posição atual e usa o operador de módulo para garantir que permaneça dentro dos limites do array
    imagemAtual = (imagemAtual + 1) % imagens.length;
    banner.style.transition = "background-image 1s ease-in-out 0s";
    mudarImagem();
    return 2;
  }

  // Função para retroceder para a imagem anterior no array
  function prevSlide() {
    // Decrementa a posição atual e usa o operador de módulo para garantir que permaneça dentro dos limites do array
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    banner.style.transition = "background-image 1s ease-in-out 0s";
    mudarImagem();
    return 1;
  }

  function passarSlideTimer() {
    intervalo = 6000;
    banner.style.transition = "background-image 1s ease-in-out 1s";
    // Chama a função mudarImagem para definir a imagem inicial
    mudarImagem();
    // Adiciona um intervalo para avançar automaticamente a cada 5 segundos
    setInterval(nextSlide, intervalo);
  }

  //Botão Timer, Sera usado para iimplementação de um delay para que so possa sera ativado de novo quando a animação acabar//

  function ativarBotao() {
    if ((botaoAtivado = true)) {
      // Desativa o botão
      BB1.disabled = true;
      BB2.disabled = true;

      // Configura o temporizador (timeout) para reativar o botão após 1 segundo
      setTimeout(function () {
        BB1.disabled = false;
        BB2.disabled = false;
      }, 2000);

      // Atualiza o estado do botão
      botaoAtivado = false;
    }
  }

  // Adiciona eventos aos botões para avançar e retroceder
  BB1.addEventListener("click", function () {
    intervalo = 6000;
    if (botaoAtivado = true) {
      nextSlide();
      ativarBotao();
    }
  });

  BB2.addEventListener("click", function () {
    intervalo = 6000;
    if (botaoAtivado = true) {
      prevSlide();
      ativarBotao();
    }
  });

  if (intervalo = 6000){console.log("Intervalo Resetado")}

  // Inicia o processo
  passarSlideTimer();
});
