//Variáveis
const campo = document.querySelector("#campo");
const saveBtn = document.querySelector("#salvar");

//Adicionar evento de clique ao botão salvar
saveBtn.addEventListener("click", function(){
    //Validação Campo
    if(campo.value == ""){
        alert("Digite algum valor");
        return false;
    }
    const value = campo.value;

    //Salvar no local storage
    const key = `ValorSalvo_${Date.now()}`; // usa timestamp para chave única
    
    //Funcionalidade do LocalStorage
    localStorage.setItem(key, value);

    //Limpar Campo após salvar

    campo.value = "";

    // Exibir valores salvos 
    carregarValoresSalvos();
});