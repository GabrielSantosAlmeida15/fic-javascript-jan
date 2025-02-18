// Variaveis
const userName = document.getElementById("nome");
const userCity = document.getElementById("cidade");
const userEmail = document.getElementById("email");

const title = document.getElementById("titulo"); 
const subtitle = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt-email");


function mudar(event){
    event.preventDefault();
    console.log(userName.value);

    // Imprimir na tela
    title.innerHTML = userName.value;

    subtitle.innerHTML = userCity.value;

    txtEmail.innerHTML = userEmail.value;

}