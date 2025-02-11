/**
 Faça um programa que verifique se o numero é positivo, negativo, zero ou invalido 
 */

 number = prompt("Digite um numero");

 if(number > 0){
    console.log("O numero é positivo");
    document.write("O numero é positivo");
 } 
 else if(number == 0){
    console.log("O numero é zero");
    document.write("O numero é zero");
 }
 else if (number < 0){
    console.log("O numero é negativo");
    document.write("O numero é negativo");
 } 
 else{
    console.log("Numero invalido");
    document.write("Numero invalido");
 }