var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido"); // busca classe no css
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido"); // busca classe no css
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; // to fixed (quantidade pós virgula)
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


//titulo.addEventListener() Adiciona um evento de ouvir o que acontece no titulo

/*
var paciente2 = document.querySelector("#segundo-paciente");

var hpeso = paciente2.querySelector(".info-peso");
var apeso = hpeso.textContent;

var haltura = paciente2.querySelector(".info-altura");
var aaltura = haltura.textContent;

var iimc = paciente2.querySelector(".info-imc");
var oimc = apeso / (aaltura * aaltura);

iimc.textContent = parseInt(oimc);
*/

