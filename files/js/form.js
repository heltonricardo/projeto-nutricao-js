var botao = document.querySelector("#adicionar-paciente");

// Adição de evento de click com chamada de função anônima:
botao.addEventListener("click", function (event) {
   // Impede o comportamento padrão de botões em formulário:
   // (atualizar página e limpar formulário )
   event.preventDefault();

   var form = document.querySelector("#form-adiciona");
   var paciente = obtemPacienteDoFormulario(form);

   pacienteTr = montaTr(paciente);

   var tabela = document.querySelector("#tabela-pacientes");

   //Adiciona a linha na tabela:
   tabela.appendChild(pacienteTr);

   form.reset(); // Limpa os campos do formulário
});

// Quando existe o "name" nos elementos de um form é possível acessá-los \
// usando: form.nomeCampo
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
