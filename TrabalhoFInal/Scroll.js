let Scroll = document.getElementById("LocBotao");
let mapa = document.getElementById("Mapa")


Scroll.addEventListener("click",function(){
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 100,
        behavior: 'smooth'
      });

    setInterval(() => {
        mapa.classList.add("sombra");
    },  1100);
})