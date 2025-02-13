/**
 * -Após a const names, utilize um for loop para gerar um template HTML;
 * -Exiba no console o template HTML que você gerou;
 * -O template deve ser exibido apenas uma vez no console e o resultado de ser:
 * <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
 */

const names = ['João Grilo', 'chicó', 'Rosinha'];

let texto = '';

for(let i = 0; i < names.length; i++){
    texto += `<li>${names[i]}</li>`;
    
}
console.log(texto);