// Váriaveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")
let messageError = document.getElementById("message");

function resultadoNotaClick(event){
    // previne um comportamento no navegador
    event.preventDefault();
    console.log(inputNota.value);

    resultado.innerHTML = ""

    // Validação de formulario
    if(inputNota.value == ""){
        messageError.style.display= "block";
        return false;
    }

    messageError.style.display= "none";

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