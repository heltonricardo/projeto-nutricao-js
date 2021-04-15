var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function (event) {
   event.target.parentNode.classList.add("fadeOut");

   setTimeout(function() {
       event.target.parentNode.remove();
   }, 500);
});

/* No JS, quando adicionamos um escutador de eventos em um elemento, todos os
 * pais também recebem esse escutador. Faz sentido pois se uma célula da linha
 * de uma tabela é clicada, o clique também foi feito em sua linha e na própria
 * tabela. Isso ocorre em todos os elementos e seus respectivos pais, não só em
 * tabelas. Usando essa ideia, adicionamos um escutador de eventos em todo o
 * corpo da tabela e quando há um clique em uma célula, pegamos o pai da célula
 * (sua linha) através do parentNode e o removemos.
 * 
 * Usamos o setTimeout pois a interpretação do código é muito rápida, e quando
 * uma classe está sendo adicionada (linha 4) a próxima linha já é executada.
 * Então foi necessário aguardar por 500 milisegundos para remover a linha.
 */
