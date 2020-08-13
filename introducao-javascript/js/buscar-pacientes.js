var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
// open - colocar o endereço mas não busca.

    xhr.addEventListener("load", function(){ //add evento escutar, parametro (load == qundo/carregar...)
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remover("invisivel");
        }
    });

    xhr.send(); // send == enter da busca.

});               //MODELO DE REQUISIÇÃO AJAX.