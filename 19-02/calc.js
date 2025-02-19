// Obtém os elementos do DOM
const value1 = document.getElementById("valor1");
const value2 = document.getElementById("valor2");

//Variável
const result = document.getElementById("resultado")

//Função para limpar campos
function limparCampos() {

    value1.value = "";
    value2.value = "";

}


//função para somar os valores
function somar(event) {
    event.preventDefault();
    let sumResult = Number(value1.value) + Number(value2.value);

    result.innerHTML = sumResult;

    limparCampos();

}

function sub(event) {
    event.preventDefault();
    let sumResult = Number(value1.value) - Number(value2.value);

    result.innerHTML = sumResult;

    limparCampos();
}

function mult(event) {
    event.preventDefault();
    let sumResult = Number(value1.value) * Number(value2.value);

    result.innerHTML = sumResult;

    limparCampos();
}

function div(event) {
    event.preventDefault();
    let sumResult = Number(value1.value) / Number(value2.value);

    result.innerHTML = sumResult;

    limparCampos();
}

