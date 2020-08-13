var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){ // espera um tempo para o evento acontecer.
        event.target.parentNode.remove();
    },500);
});

//parentNode - pai do html.