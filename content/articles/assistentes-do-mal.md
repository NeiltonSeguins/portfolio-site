---
title: "Assistentes do Mal: o programador pragmático"
description: "Assistentes de código sempre existiram em diferentes épocas, mas você quase nunca ouviu falar disso."
slug: "assistentes-do-mal"
date: "2026-02-02"
cover: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["agentes", "ia"]
---

Durante a minha leitura do livro *[O Programador Pragmático](https://a.co/d/2BbOtTN)*, de ***Andrew Hunt*** e ***David Thomas***, me deparei com uma seção chamada **“Assistentes do mal”**. Depois de ler, descobri que assistentes de código sempre existiram e foram úteis em determinadas tarefas. Mas será que eles realmente são “do mal”?

## A visão do livro

Bom, o que o “Andy” (para os mais íntimos) quis trazer nesta seção é a visão que ele tinha na época em que escreveu o livro, lá por volta de 1999. Naquele período, com o desenvolvimento de software crescendo e se modernizando, surgiam novas interfaces gráficas mais sofisticadas e aplicativos cada vez mais complexos. Ficava claro que, para os programadores acompanharem tudo isso, o desafio era enorme.

O Andy comenta que, se um programador tentasse desenvolver tudo usando ferramentas antigas (mais antigas que as de 1999), com certeza não conseguiria entregar muita coisa.

Com isso, ele explica que naquela época já existiam os chamados **“assistentes de código”**, que eram scripts, programas ou interfaces capazes de criar “códigos esqueleto” automaticamente. Ele chega a citar o Microsoft Visual C++, que gerava até 1.200 linhas de código de forma automática. Isso era ótimo, pois trazia agilidade na hora de escrever código, já que parte dele podia ser gerada por esses assistentes.

Mas, segundo o Andy, é aí que mora o perigo. Usar assistentes de geração de código para escrever “seus” códigos pode te trazer um problemão no futuro. Ele traz o exemplo do Joe, que utilizou um assistente para gerar o código de uma aplicação. Joe não teve o cuidado de revisar o código gerado: apenas copiou, colou e enviou para produção. Funcionou. A aplicação rodava, atendia aos requisitos e resolvia o problema dele.

O problema surge quando o Joe precisa colocar a mão nesse código para depurar um erro ou fazer alguma manutenção no futuro. Nesse momento, ele provavelmente terá uma grande dificuldade para entender o que foi feito.

O Andy destaca que pessoas que agem assim acabam *programando baseado no acaso*, pois não sabem como o código realmente funciona e terão dificuldades para adaptá-lo caso ocorram mudanças. O autor ainda deixa uma nota importante, que vou destacar aqui antes de irmos para o próximo tópico:

---

> **Não use um código de assistente que você não entenda.**

---

## A minha visão

Enquanto lia este livro no ano atual, foi inevitável não associar esses assistentes que geram código à nossa querida IA. Nos últimos anos, vivemos um avanço significativo e acelerado de ferramentas para criação e geração de código baseadas em inteligência artificial. Hoje, é possível gerar aplicações inteiras a partir de um único prompt, e essas aplicações, na maioria das vezes, são funcionais e exigem poucos ajustes.

Gerar código com IA ficou tão popular que até criaram o termo ***Vibe Coder***, que se refere à pessoa que cria ou desenvolve aplicativos usando prompts para instruir ou solicitar código dessas ferramentas. Além disso, atualmente existem várias soluções que atuam como *Agentes de IA* focados em desenvolvimento, capazes de auxiliar na criação de código do zero, fazer revisões em projetos, sugerir mudanças e até aplicar alterações.

Eu acho incrível vivermos em uma época em que podemos dar instruções em linguagem natural para uma máquina e vê-la transformar isso em código, criando aplicações funcionais. Isso democratiza um pouco a tecnologia. Não é raro vermos pessoas de diferentes áreas utilizando essas ferramentas para criar aplicações do zero, seja para clientes ou para seus próprios negócios. Isso é muito legal.

Mas, quando falamos de **desenvolvimento de software**, é necessário ter certo cuidado com o que é gerado por essas ferramentas. A IA não pensa sozinha e não possui capacidade de abstração. Ela é **um sistema que calcula estatisticamente as respostas mais prováveis para determinadas entradas, com base em padrões presentes nos seus dados de treinamento**. Então, se você desenvolve software e está apenas pedindo para a IA gerar código, copiando e colando sem revisão, você pode estar se colocando em uma situação bem complicada no futuro — sem contar o risco que isso representa para o software que você entrega.


---
> Veja este artigo sobre [Como a assistência de IA afeta a formação de habilidades de codificação](https://www.anthropic.com/research/AI-assistance-coding-skills)
---

## Concluindo...

É por isso que o livro fala em *programar baseado no acaso*. Você não teve o cuidado de revisar o código gerado e simplesmente o adicionou ao seu aplicativo ou software e seguiu em frente. Quando precisar revisitar esse código, a dor de cabeça para entender e realizar as alterações necessárias provavelmente será grande.

Para finalizar, assim como o autor, eu não sou contra o uso de IA para gerar código. É inegável o ganho de agilidade (sim, agilidade, e não produtividade) ao pedir que ela crie algo que já foi feito inúmeras vezes, como um componente React de botão ou um CRUD simples em Node.js. O problema está em confiar cegamente que aquele código é o melhor possível, não revisá-lo adequadamente, não entender o que foi feito e não saber explicar o que o código realmente faz.

No fim das contas, a principal lição que ficou após terminar essa seção do livro é que não são os assistentes que são do mal, mas sim o uso que fazemos deles. Tanto naquela época quanto hoje, é preciso cuidado ao utilizar essas ferramentas: elas devem trazer mais agilidade ao trabalho, pois o que realmente importa é o bom — ou mau — uso que fazemos delas.
