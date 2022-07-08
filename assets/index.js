/* 
const saida = document.querySelector(".meu-nome");

function digitacao(texto, contador) {
  

  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 200);
  }
}

digitacao("Murilo Calmon", 0); */


var typed = new Typed(".dev-text-anim", {
  strings:["Desenvolvedor","Front-End", "Programador",],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});

var typed = new Typed(".meu-nome", {
  strings:["Murilo Calmon"],
  typeSpeed:100,
  showCursor: false,
});


