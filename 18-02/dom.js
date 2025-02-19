// Variaveis
const userName = document.getElementById("nome");
const userCity = document.getElementById("cidade");
const userEmail = document.getElementById("email");

const title = document.getElementById("titulo");
const subtitle = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt-email");


function mudar(event) {
    event.preventDefault();
    console.log(userName.value);

    //Validação
    if (userName.value == "" || userCity.value == "" || userEmail.value == "") {
        alert("Preencha os campos")
        return false;
    }

    // Imprimir na tela
    title.innerHTML = userName.value;

    subtitle.innerHTML = userCity.value;

    txtEmail.innerHTML = userEmail.value;

    //Limpar campos
    userName.value = "";

    userCity.value = "";

    userEmail.value = "";


}

function mudarCor() {
    if (document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "";
    }
    else {
        document.body.style.backgroundColor = "orange"
    }
}



