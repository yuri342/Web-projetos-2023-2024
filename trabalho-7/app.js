var mbb1 = document.getElementById("mbB1");
var mbb2 = document.getElementById("mbB2");
var bb1 = document.getElementById("bB1");
var bb2 = document.getElementById("bB2");
var mbt = document.getElementById("minibt");
var b = document.getElementById("Banner");
var n = 0;

function textR(n) {
  switch (n) {
    case 1:
      return "Promo Vans 50%!!";
      break;
    case 2:
      return "Codigo Frete Gratis!!! | FRETEVANS";
      break;
    case 3:
      return "Sessão de INVERNO 50% DE DESCONTO!!";
    default:
      return "ErrO";
      break;
  }
}

function img(n) {
  switch (n) {
    case 1:
      b.style.backgroundImage = "url('Tony.png')";
      b.style.backgroundSize = "cover";
      break;
    case 2:
      b.style.backgroundImage = "url('img2.png')";
      b.style.backgroundSize = "cover";
      break;
    case 3:
      b.style.backgroundImage = "url('VansApp-hero.jpg')";
      b.style.backgroundSize = "cover";
    default:
      return "ErrO";
      break;
  }
}

function slide1() {
  mbt.textContent = textR(1);
  setTimeout("slide2()", 1000);
}

function slide2() {
  mbt.textContent = textR(2);
  setTimeout("slide3()", 1000);
}

function slide3() {
  setTimeout("slide3()", 1000);
  setTimeout("slide1()", 1000);
}

mbb1.addEventListener("click", function () {
  n++;
  if (n > 3) {
    n = 1;
  }
  mbt.textContent = textR(n);
});

mbb2.addEventListener("click", function () {
  n++;
  if (n > 3) {
    n = 1;
  }
  mbt.textContent = textR(n);
});

bb1.addEventListener("click", function () {
    n++;
    if (n > 3) {
      n = 1;
    }
    img(n);
});
bb2.addEventListener("click", function () {
    n++;
    if (n > 3) {
      n = 1;
    }
    img(n);
});
