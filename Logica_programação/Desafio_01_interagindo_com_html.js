//2-Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.//

let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do desafio');

//3-Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.//

function verificarClick(){
     console.log ('O botão foi clicado');
}

//4-Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.//

function amoJs(){
    alert ( 'Eu amo JS');
}

/*5-Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.*/

function cidadeBrasil(){
    let cidadeBrasil = prompt ('Escreva uma nome de uma cidade Brasileira');
    alert (`Estive em ${cidadeBrasil} e lembrei de você.`);
}

//6-Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.//

function soma(){
    num1 = parseFloat(prompt( 'Escreva um número' ));
    num2 = parseFloat(prompt(' Escreva mais um número'));
    let somaNum = num1+num2;
    alert ( `A soma dos numeros escolhidos e ${somaNum}`);
}

