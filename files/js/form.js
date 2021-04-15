/* Quando existe o "id" nos elementos de um form,
 * é possível acessá-los usando: form.nomeCampo
 */

// Cria um objeto paciente com os dados inseridos no formulário:
function obtemPacienteDoFormulario(form) {
   var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value),
   };
   return paciente;
}

// Cria cinco td's (colunas de tabela):
function montaTd(dado, classe) {
   var td = document.createElement("td"); // Coluna de tabela
   td.textContent = dado;
   td.classList.add(classe);
   return td;
}

// Cria uma tr (linha de tabela do HTML):
function montaTr(paciente) {
   var pacienteTr = document.createElement("tr"); // Linha de tabela
   pacienteTr.classList.add("paciente");

   // Adiciona as colunas na linha criada:
   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

   return pacienteTr;
}

function exibeErros(erros) {
   var ul = document.querySelector("#mensagem-erro");
   erros.forEach(function(erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
   });
}

function pacienteValido(paciente) {
   var erros = [];

   if (paciente.nome.trim().length == 0) {
      erros.push("Nome inválido!");
   }

   if (!pesoValido(paciente.peso)) {
      erros.push("Valor inválido para o peso!");
   }

   if (!alturaValida(paciente.altura)) {
      erros.push("Valor inválido para a altura!");
   }

   if (paciente.gordura.length == 0) {
      erros.push("Valor inválido para a gordura!");
   }

   if (erros.length) {
      exibeErros(erros);
      return false;
   }

   return true;
}

var botao = document.querySelector("#adicionar-paciente");

// Adição de evento de click com chamada de função anônima:
botao.addEventListener("click", function (event) {
   // Impede o comportamento padrão de botões em formulário:
   // (atualizar página e limpar formulário )
   event.preventDefault();

   var ul = document.querySelector("ul");
   ul.innerHTML = ""; // Apaga o que tem dentro da UL de erros

   var form = document.querySelector("#form-adiciona");
   var paciente = obtemPacienteDoFormulario(form);

   if (pacienteValido(paciente)) {
      pacienteTr = montaTr(paciente);

      var tabela = document.querySelector("#tabela-pacientes");

      //Adiciona a linha na tabela:
      tabela.appendChild(pacienteTr);

      form.reset(); // Limpa os campos do formulário
   }
});
