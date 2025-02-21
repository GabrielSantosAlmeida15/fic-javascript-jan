const cars = [
    {
        brand: "Toyota",
        model: "Corola",
        year: 2022 
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2008
    },
    {
        brand: "BMW",
        model: "X6",
        year: 2021
    },
    {
        brand: "Ford",
        model: "Ranger",
        year: 2022
    },
    {
        brand: "Fiat",
        model: "FastBack",
        year: 2022
    },
    {
        brand: "Chevrolet",
        model: "S10",
        year: 2015
    },
    {
        brand: "Volkswagen",
        model: "Jeta",
        year: 2022
    }
];

//Cria uma função e chama essa função displayCards, aqui mesmo

function displayCards(){
    // Variável
    const cardList = document.querySelector("#card-list");

    cars.forEach((car) => {
        //Criamos um elemento div pelo javascript
        const cardDiv = document.createElement("div")
        // Criamos uma class css cars
        cardDiv.classList.add('car');

        //Criando o modelo 
        const carModel = document.createElement("h2");
        carModel.textContent = `${car.brand} ${car.model}`

        //Criando o ano
        const carYear = document.createElement("p");
        carYear.textContent = `Ano: ${car.year}`;

        // Imprimir na tela as informações
        // elementoPai.appendChild(elementoFilho)
        cardDiv.appendChild(carModel);

        cardList.appendChild(cardDiv);

        cardDiv.appendChild(carYear);

        
    })

}

displayCards();     