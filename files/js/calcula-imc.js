console.log("JS carregado a partir de um arquivo externo.");

/* Seletor de tag:    querySelector("nomeTag")
 * Seletor de classe: querySelector(".nomeClasse")
 * Seletor de id:     querySelector("#nomeId")
 */

var titulo = document.querySelector(".titulo");
titulo.textContent = "Página do Nutricionista";

document.querySelector("title").textContent = titulo.textContent;

var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
   var imc = peso / (altura * altura);
   return imc.toFixed(2);
}

function pesoValido(peso) {
   return peso.length && 0 < peso && peso < 1000;
}

function alturaValida(altura) {
   return altura.length && 0 < altura && altura < 3;
}

function dadosValidos(peso, altura) {
   return pesoValido(peso) && alturaValida(altura);
}

for (var i = 0; i < pacientes.length; ++i) {
   var paciente = pacientes[i];

   var peso = paciente.querySelector(".info-peso").textContent;
   var altura = paciente.querySelector(".info-altura").textContent;

   if (dadosValidos(peso, altura)) {
      var imc = calculaImc(peso, altura);
      paciente.querySelector(".info-imc").textContent = imc;
   } else {
      // Não é recomendável trocar os valores diretamente
      // paciente.style.color = "white"
      // paciente.style.backgroundColor = "lightcoral"
      // É recomendável manipular as classes do elemento:
      paciente.classList.add("paciente-invalido");

      paciente.querySelector(".info-imc").textContent = "Dados Inválidos!";
   }
}

// Adição de evento de click com chamada de função comum:
function mostraMsg() {
   console.log("Teste de click!");
}
titulo.addEventListener("click", mostraMsg);



