---
title: "Rick and Morty e Closures: O que essas coisas têm em comum?"
description: "Rick and Morty e Closures: O que essas coisas têm em comum?"
slug: "rick-and-morty-e-clorsures-o-que-essas-coisas-tem-em-comum"
date: "2024-10-23"
cover: "https://images.unsplash.com/photo-1551595735-8a7344fa1bd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["closure", "javascript"]
---

E aí, tudo bom? Espero que sim! 

Eu estava tentando resolver alguns problemas de programação no [Leetcode](https://leetcode.com/explore/) e em um dos desafios eu me deparei com um conceito muito importante em programação que muitas pessoas tem dificuldade em entender. 

Então resolvi escrever aqui tentando explicar da melhor forma possível como _closures_ funcionam no JavaScript. Vem comigo!

## O Problema

Eu estava trabalhando em um desafio chamado "Counter" onde eu precisava criar uma função `counter` que retornasse inicialmente o número inteiro `n` e, a cada chamada subsequente, retornasse 1 unidade a mais do que o valor anterior. Por exemplo:

*   `counter(10)` retorna `10`
*   `counter()` (chamado novamente) retorna `11`
*   `counter()` (chamado novamente) retorna `12`

O problema dá algumas dicas, entre elas que podemos usar **_funções que retornam outras funções_**. 

Este é o conceito de **closures**. Então segui a dica e fui por este caminho. Aqui está a solução que cheguei:

```js
var createCounter = function (n) {
    let contador = n;
    return function () {
        resultado = contador;
        contador++
        return resultado;
    };
};
```
Esse código define uma função chamada `createCounter` que retorna uma outra função (closure), capaz de armazenar e manipular uma variável local (no caso, o contador). 

* O contador começa com o valor de `n` passado quando você chama `createCounter()`.
* Cada vez que você executa a função, a função interna (retornada) acessa o valor atual de contador, o retorna, e então o incrementa.
* Isso permite que o contador "lembre" de onde parou, graças ao closure.

Neste último passo é onde percebemos o verdadeiro poder de uma closure. Uma closure é quando uma função retorna outra função que **tem acesso a variáveis externas** e **mantém seu estado entre chamadas**. É como ter um pequeno "esconderijo" dentro da minha função onde eu posso armazenar informações e acessá-las posteriormente.

## E onde o Rick e Morty entra nessa história?

A série [Rick and Morty](https://www.imdb.com/title/tt2861424/?language=pt-br) brinca com viagens interdimensionais, outras civilizações e faz críticas e propõe reflexões sobre muitas questões existenciais para o ser humano. 

Se você não conhece a série aqui vai um breve resumo: O Rick Sanchez, personagem principal da obra, é um cientista que desenvolve todas as maluquices tecnológicas e costuma levar em suas aventuras seu neto Morty. Uma das invenções mais famosas do velho é o portal interdimensional, que permite que ele viaje entre realidades e dimensões. Para saber mais, você vai ter que assistir a série (risos).

Onde você quer chegar, Neilton? 

Bom, imagina que o Rick desenvolve uma mochila interdimensional para o Morty, que dá acesso a uma dimensão específica. Nessa dimensão, o Rick coloca algumas ferramentas importantes. Morty pode carregar a mochila para qualquer lugar — seja para a escola, para passear, ou até para uma viagem intergaláctica — e, mesmo longe de Rick, ele ainda terá acesso a tudo o que foi guardado lá. 

A melhor parte? Morty pode abrir a mochila e pegar as ferramentas sempre que quiser usar ou até modificar o que está lá dentro. E não importa onde ele esteja, o que foi guardado continua acessível. 

E como esse exemplo se conecta com as closures? 

* Rick é a _função externa_, que cria o **escopo** (dimensão) e as **variáveis** (ferramentas) que podem ser acessadas depois.
* O Morty com a mochila representa a _função interna_, que pode acessar e modificar as variáveis da função externa.
* A dimensão representa o _escopo léxico_ da função externa, ou seja, as variáveis que foram criadas dentro da função externa e são acessadas pela função interna, mesmo após a função externa ser executada.
* O fato de Morty poder acessar as coisas da dimensão de qualquer lugar reflete a _persistência do escopo_: mesmo após a função externa ser finalizada, a função interna mantém o acesso às variáveis do escopo original.

Closures são poderosos recursos em programação. Entre as principais vantagens de usar closures, eu destaco o encapsulamento e a memoização. O encapsulamento porque o valor só pode ser acessado através da closure (função interna) e a memoização pela capacidade de preservar o valor das variáveis entre chamadas. 

---

Imagem gerada por IA: https://designer.microsoft.com/image-creator?scenario=texttoimage

> Prompt: Generate an image where Rick from Rick and Morty is handing Morty a glowing dimensional pocket device. Morty is pulling objects out of the pocket, like tools and gadgets, while Rick casually explains the mechanics of it in a lab. The pocket represents a closure, containing floating items that Morty can keep accessing, even after Rick steps away.

---

## Conclusão

E aí, deu para entender o que são closures e como elas são importantes em programação? As vezes eu queria ter uma mochila como essa do Morty para guardar coisas úteis ou simplesmente para me teleportar para uma outra dimensão (risos).

Se gostou do conteúdo, comenta e compartilha aí, vai! Dá essa força se você acha que este artigo irá ajudar outras pessoas.

Até a próxima!