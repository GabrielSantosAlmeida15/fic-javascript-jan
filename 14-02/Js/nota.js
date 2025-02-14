// Váriaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event){
    // previne um comportamento no navegador
    event.preventDefault();
    console.log(inputNota.value);

    // condição
    if(inputNota.value >= 6){
        console.log("Aluno Aprovado");
        resultado.innerHTML = "Aluno Aprovado"
    }
    else{
        console.log("Aluno Reprovado");
        resultado.innerHTML = "Aluno Reprovado"
    }

    inputNota.value = "";
}