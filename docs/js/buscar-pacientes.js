/* Essa implementação refere-se ao algoritmo implementado no botão de buscar
 * clientes. Ele acessa um servidor com alguns pacientes e os adiciona na
 * tabela. Essa técnica é chamada de AJAX: fazer requisições com JS de modo
 * assíncrono, isso é, quando a requisição está sendo feita, ainda é possível
 * utilizar a página normalmente, podendo apagar as linhas ou adicionar
 * pacientes de modo manual, a página não é "bloqueada" enquanto aguarda a
 * resposta da requisição.
 */

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
   var url = "http://api-pacientes.herokuapp.com/pacientes";

   // XMLHttpRequest faz requisições HTTP (mas não só do tipo XML)
   var xhr = new XMLHttpRequest();

   // Escutador de eventos no objeto para quando a página for carregada
   xhr.addEventListener("load", function () {
      if (xhr.status == 200) {
         var resposta = xhr.responseText; // resposta é do tipo string
         var pacientes = JSON.parse(resposta); // pacientes é do tipo objeto
         pacientes.forEach(function (paciente) {
            adicionaPacienteNaTabela(paciente);
         });
      } else {
         alert("Erro durante a importação. Código " + xhr.status + ".");
      }
   });

   // Configurando o objeto
   xhr.open("GET", url);

   // Envio da requisição através do objeto
   xhr.send();
});
