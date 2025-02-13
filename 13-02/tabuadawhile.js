num = 0;
let mult = prompt("Qual numero deseja mjultiplicar?");
let quantity = prompt("Até que numero deseja multiplicar esse numero?")

while(num <= quantity){
    console.log(`${mult} X ${num} = ${num}`);
    document.write(`${mult} X ${num} = ${num}`);
    document.write("<br>")
    num++;
}