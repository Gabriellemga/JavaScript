/* 1.Pergunte ao usuario qual é o dia da semana.*/

let chute = prompt('Qual é o dia da semana?'); 
if (chute == 'Sábado'|| 'Domingo') { 
  alert('Bom fim de semana!'); 
} else { alert('Boa semana!'); 
       }

/2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando/

let teste = prompt(' O número é positivo ou negativo?'); 
if (teste >= 0) { 
  alert('Número Positivo'); 
} else { alert('Número Negativo '); 
       }

/*3.Crie um sistema de pontuação para um jogo.Pontuação maior ou igual a 100 mostre 'Parabens você venceu, no console do navegador.Caso contrário 'Tente novamente para ganhar */

let pontuacao = 100; 
if (pontuacao >= 100){
  console.log ('Parabens você venceu'); 
} else { console.log ('Tente novamente'); 
       }

/4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo./

let saldo = 1000; 
alert(O seu saldo atual é de ${saldo} reais);

/5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome./

nome = prompt ('Escreva o seu nome '); 
alert (Seja bem vindo ${nome} ! :) );
