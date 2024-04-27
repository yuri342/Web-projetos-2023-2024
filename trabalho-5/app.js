var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");
var carname = document.getElementById("Carname");
var p = document.getElementById("sobre");
const video = document.getElementsByClassName("vid-area");
var iframe = document.getElementById("iframe");

card1.addEventListener("mouseenter", function () {
  bar1.style.animationDirection = "normal";
  bar2.style.animationDirection = "normal";
  bar3.style.animationDirection = "normal";
  bar1.style.setProperty("--pR", "80%");
  bar2.style.setProperty("--pR", "80%");
  bar3.style.setProperty("--pR", "70%");
  bar1.classList.add("animacao");
  bar2.classList.add("animacao");
  bar3.classList.add("animacao");
  carname.style.opacity = "0";
  p.style.opacity = "0";
  setTimeout(() => {
    p.style.opacity = "1";
    p.textContent =
      "O Bugatti Type 57 é um tesouro da era da alta costura automotiva. Criado pela lendária marca Bugatti, este carro de luxo dos anos 1930 é conhecido por seu artesanato impecável e design elegante. O Type 57 foi uma obra-prima da engenharia da época, unindo performance excepcional e beleza estonteante. Hoje, ele é valorizado como um dos carros clássicos mais prestigiados do mundo.";
    carname.style.opacity = "1";
    carname.textContent = "Type-57";
  }, 500);
  iframe.width = "1280";
  iframe.height = "545";
  iframe.src =
    "https://www.youtube.com/embed/p6gZyJ1l-EM?si=OukqUvsxkRIcVUfD&amp;";
  iframe.title = '"TERMINAL LOOP" | Justin\'s 800WHP MK4 Supra | HALCYON (4K)';
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  console.log(bar1);
  console.log(bar2);
  console.log(bar3);
  card1.addEventListener("mouseleave", function () {
    bar1.classList.remove("animacao");
    bar2.classList.remove("animacao");
    bar3.classList.remove("animacao");
  });
});

card2.addEventListener("mouseenter", function () {
  bar1.style.animationDirection = "normal";
  bar2.style.animationDirection = "normal";
  bar3.style.animationDirection = "normal";
  bar1.style.setProperty("--pR", "80%");
  bar2.style.setProperty("--pR", "95%");
  bar3.style.setProperty("--pR", "85%");
  bar1.classList.add("animacao");
  bar2.classList.add("animacao");
  bar3.classList.add("animacao");
  carname.style.opacity = "0";
  p.style.opacity = "0";
  setTimeout(() => {
    p.style.opacity = "1";
    p.textContent =
      "O Ford Mustang de 1967 é um clássico americano que personifica a era de ouro dos muscle cars. Com seu design elegante e linhas atemporais, o Mustang '67 é um exemplo de pura potência sob o capô. Este carro icônico é amado por entusiastas por seu visual inconfundível e desempenho impressionante, continuando a ser um símbolo da paixão automotiva.";
    carname.style.opacity = "1  ";
    carname.textContent = "Mustang";
  }, 500);
  iframe.width = "1280";
  iframe.height = "545";
  iframe.src =
    "https://www.youtube.com/embed/ahdCJUqb254?si=tBv2YDoXenpLxD16&amp;";
  iframe.title = '"TERMINAL LOOP" | Justin\'s 800WHP MK4 Supra | HALCYON (4K)';
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  console.log(bar1);
  console.log(bar2);
  console.log(bar3);
  card2.addEventListener("mouseleave", function () {
    bar1.classList.remove("animacao");
    bar2.classList.remove("animacao");
    bar3.classList.remove("animacao");
  });
});
card3.addEventListener("mouseenter", function () {
  bar1.style.animationDirection = "normal";
  bar2.style.animationDirection = "normal";
  bar3.style.animationDirection = "normal";
  bar1.style.setProperty("--pR", "80%");
  bar2.style.setProperty("--pR", "70%");
  bar3.style.setProperty("--pR", "95%");
  bar1.classList.add("animacao");
  bar2.classList.add("animacao");
  bar3.classList.add("animacao");
  carname.style.opacity = "0";
  p.style.opacity = "0";
  setTimeout(() => {
    p.style.opacity = "1";
    p.textContent =
      "O Toyota Supra é um ícone dos esportivos japoneses que conquistou uma legião de fãs em todo o mundo. Com seu design aerodinâmico e um poderoso motor, o Supra é conhecido por oferecer uma experiência de condução emocionante. Desde o seu lançamento, ele tem sido sinônimo de desempenho e estilo, tornando-se um dos carros mais emblemáticos da Toyota.";
    carname.style.opacity = "1  ";
    carname.textContent = "Supra";
  }, 500);
  iframe.width = "1280";
  iframe.height = "545";
  iframe.src = "https://www.youtube.com/embed/mkppo2wfp_c";
  iframe.title = '"TERMINAL LOOP" | Justin\'s 800WHP MK4 Supra | HALCYON (4K)';
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  console.log(bar1);
  console.log(bar2);
  console.log(bar3);
  card3.addEventListener("mouseleave", function () {
    bar1.classList.remove("animacao");
    bar2.classList.remove("animacao");
    bar3.classList.remove("animacao");
  });
});
