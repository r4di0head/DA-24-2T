/* Trabalho avaliativo, validaçao de algoritmos. feito em dupla por Anna julia e Maria eduarda 

entrada: 5, 3,5,-7, 2, 8,4, -6, 2362346130, 0135213651
saída esperada: impar,impar, impar, par, par, par, par, impar
saída real:     impar, impar, impar, par, par, par, par, impar
resultado:passou, apenas um unico descuido na digitaçao que havia causado problema, mas foi rapidamente resolvido, uma unica alteraçao.
fora isso, todos os resultados foram precisos.

 o prompt, no comando abaixo, Solicita um número ao usuário, já o parseInt foi usado para converção*/
 const numero =
 parseInt(prompt("Digite um número"));
 
 /* Verifica se o número é par ou impar, if para uma das respostas e else para a outra, o que é a funcionalidade.*/
 if (numero %2===0){
     console.log("o número é par.");
 } else {
     console.log("o número é ímpar.");
 }
 