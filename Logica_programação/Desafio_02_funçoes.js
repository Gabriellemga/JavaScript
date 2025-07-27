//1-Criar uma função que exibe "Olá, mundo!" no console.//


function olaMundo(){
     console.log('Olá, mundo !!');
}

olaMundo();

//2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.//

function nomeOla(nome){
     console.log(`Olá, ${nome} `)
}

nomeOla('Gabrielle');

//3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.//

function dobroNumero(numero){
    return numero * 2;
    }

let numero = dobroNumero(5);
console.log(dobroNumero(numero));

//4-Criar uma função que recebe três números como parâmetros e retorna a média deles.//

function mediaTresNumeros(num1,num2,num3){
       return parseInt((num1 + num2 + num3)/3);
 }
 
let media = mediaTresNumeros(3,4,9);
console.log(media);

//-5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.//

function maiorNumero(x1,x2){
   return  x1 > x2 ? x1 : x2;
}

let maior = maiorNumero(8, 6);
console.log(maior);

//6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo//

function multiplicação (a){
    return a*a;
}

let aVezesA = multiplicação(8);
console.log( aVezesA);
