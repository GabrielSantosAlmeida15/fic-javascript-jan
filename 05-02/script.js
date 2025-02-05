let nome, idade, cidade, time

nome = prompt("Qual o seu nome?");
idade = prompt("Quantos anos você tem?");
cidade = prompt("Qual cidade você mora?");
time = prompt("Para Qual time você torce?");

document.write("Seu nome é:  " + nome + " você tem: " + idade + " Anos ");
document.write("<br>");
document.write("Voce mora na cidade de " + cidade + ", e torce para o time " + time); 
document.write("<br><br>");
document.write(`Seja bem vindo ${nome}, sua idade é ${idade} e você mora na cidade de ${cidade} torce para o ${time}`);