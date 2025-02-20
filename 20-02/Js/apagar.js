const deleteBtn = document.getElementById("apagar");

deleteBtn.addEventListener("click", function(){
    //Limpa todos os valores
    localStorage.clear();

    //Limpa a lista na interface
    listValues.innerHTML = "";
})