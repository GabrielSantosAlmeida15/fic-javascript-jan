/**
 * crie um programa que recebe uma nota, e verifique se a nota é >= 6
 * se sim o aluno esta aprovado, senão o aluno esta reprovado
 */

let nota = prompt("Digite a nota do Aluno");

if(nota >= 6){
    console.log("Aluno aprovado");
    document.write("Aluno aprovado");
}else{
    console.log("Aluno Reprovado");
    document.write("Aluno Reprovado");
}