const listValues = document.querySelector("#listaValores");

//Carregar valores salvos ao iniciar a pagina

carregarValoresSalvos();

function carregarValoresSalvos(){
    listValues.innerHTML = ""; // Limpar a lista antes de adicionar os valores

    for(let i = 0; i < localStorage.length; i++){

        const key = localStorage.key(i);
        // Filtra as chaves desejadas
        if(key.startsWith("ValorSalvo")){
            const value = localStorage.getItem(key);

            //Criar elemento HTML
            const listItem = document.createElement("li");

            listItem.textContent = value;

            listValues.appendChild(listItem);
        }

        

    }
}
