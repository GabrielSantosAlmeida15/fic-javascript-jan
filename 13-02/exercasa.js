/**
 *  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
  const arrays = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
  ];
 
*/

 const arrays = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
  ];
  
  let sum = 0;
  
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      sum += arrays[i][j];
    }
  }

  console.log(sum);

