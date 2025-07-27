//1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.//

function indiceMassaCorporal (peso, altura){
     return peso / altura**2     
}

console.log(indiceMassaCorporal(50,1.5));

//2-Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.//

function fatorial(num){
           return 1 >= num ? 1 : num * fatorial(num-1);
}

console.log(fatorial(9));

//3-Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.//

function dolarParaReais(reais){
    let dolar = 4.80;
    return reais* dolar;

}

let dolarEmReais = dolarParaReais(20);
console.log(dolarEmReais);

//4-Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.//

function areaPerimetroSala(largura, altura){
    let area = largura * altura;
    let perimetro = (2*largura) + (2*altura);
    alert (`A area da sala é ${area} metros quadrados e perímetro de ${perimetro} metros.`)
}

areaPerimetroSala(2,1.5);

//5-Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.//

function areaPerimetroCircular(raio){
    let pi = 3.14;
    let area = pi * raio**2;
    let perimetro = 2 * pi * raio;
     alert (`A area da sala circular é ${area} metros quadrados e perímetro de ${perimetro} metros.`)

}

areaPerimetroCircular(3);

//6-Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.//

function tabuada(num){
        let contador = 0;
           while( contador <= 10){
            console.log (`${num} x ${contador}  =  ${num*contador}`);  
            contador++;
        }
    
}

tabuada(5);
