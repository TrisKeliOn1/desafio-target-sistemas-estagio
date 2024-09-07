<h1 align="center"> Desafio Target Sistemas</h1>

## 🚀 Sobre 
Este desafio foi realizado na linguagem JavaScript.

### **Questão 1:** <br><br> Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

**IMPORTANTE:** Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

**Solução:** [Veja o arquivo fibonacci.js](./desafio/fibonacci.js)


##

### **Questão 2:** <br><br> Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

**IMPORTANTE:** Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

**Solução:** [Veja o arquivo contadorString.js](./desafio/contadorString.js)

##

### **Questão 3:** <br><br> Observe o trecho de código abaixo: 
```javascript
int INDICE = 12, SOMA = 0, K = 1;
enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
imprimir(SOMA);
```
Ao final do processamento, qual será o valor da variável SOMA?

**Solução:** [**`77`**](./desafio/somaResultado.js) [Veja o arquivo somaResultado.js](./desafio/somaResultado.js)

##

### **Questão 4:** <br><br> Descubra a lógica e complete o próximo elemento:<br>
a) 1, 3, 5, 7, ___<br>
b) 2, 4, 8, 16, 32, 64, ____<br>
c) 0, 1, 4, 9, 16, 25, 36, ____<br>
d) 4, 16, 36, 64, ____<br>
e) 1, 1, 2, 3, 5, 8, ____<br>
f) 2,10, 12, 16, 17, 18, 19, ____<br><br>
**Solução:**

a) 1, 3, 5, 7, **`9`** <br>
b) 2, 4, 8, 16, 32, 64, **`128`**<br>
c) 0, 1, 4, 9, 16, 25, 36, **`49`**<br>
d) 4, 16, 36, 64, **`100`**<br>
e) 1, 1, 2, 3, 5, 8, **`13`**<br>
f) 2,10, 12, 16, 17, 18, 19, **`20`** <br>

## 

### **Questão 5:** <br><br> Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 
**Solução:**

Primeiramente, ligue o primeiro interruptor e deixe-o ligado por alguns minutos. Depois, desligue o primeiro interruptor e ligue o segundo interruptor. Agora basta ir até a sala das lâmpadas e observar as lâmpadas. A lâmpada que está acesa corresponde ao segundo interruptor (aquele que está ligado no momento).
A lâmpada que está apagada mas quente corresponde ao primeiro interruptor (porque ficou ligada por um tempo antes de ser desligada).
A lâmpada que está apagada e fria corresponde ao terceiro interruptor (que você nunca ligou).

