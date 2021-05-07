var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
   var pacientes = document.querySelectorAll(".paciente");

   if (this.value.length) {
      pacientes.forEach(function (paciente) {
         var nome = paciente.querySelector(".info-nome").textContent;

         var re = new RegExp(campoFiltro.value, "i");
         if (re.test(nome)) paciente.classList.remove("invisivel");
         else paciente.classList.add("invisivel");
      });
   } else {
      pacientes.forEach(function (paciente) {
         paciente.classList.remove("invisivel");
      });
   }
});
