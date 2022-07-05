
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

digitacao("Murilo Calmon", 0);

