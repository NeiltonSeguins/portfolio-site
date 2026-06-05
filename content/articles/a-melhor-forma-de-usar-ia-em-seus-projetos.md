---
title: "A melhor forma de usar IA em seus projetos"
description: "Assistentes de código sempre existiram em diferentes épocas, mas você quase nunca ouviu falar disso."
slug: "a-melhor-forma-de-usar-ia-em-seus-projetos"
date: "2026-06-04"
cover: "https://images.unsplash.com/photo-1568833450751-fba3c6b2d129?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["agentes", "ia"]
---

Olá!

Faz tempo que não escrevo por aqui. O mundo caminha em um ritmo muito acelerado e andei tentando acompanhar. Obviamente, não consigo acompanhar *tudo*, então desacelerei e pensei em trazer algumas coisas bem legais que aprendi nos últimos meses.

## Minha relação com a IA

Faz um tempo que trouxe um pouco da minha visão sobre a inteligência artificial em dois artigos aqui no blog. Em *[Assistentes do mal](https://www.neiltonseguins.com/pt/articles/assistentes-do-mal/)* e *[O dev do futuro](https://www.neiltonseguins.com/pt/articles/o-dev-do-futuro/)*, eu falei sobre como devemos ter em mente a ideia de que a IA é uma ferramenta. E, como qualquer ferramenta, cabe a nós fazermos o melhor uso dela. Eu compartilhei que acredito que o desenvolvedor é alguém que irá delegar mais tarefas para a inteligência artificial, principalmente a escrita de código, mas também é aquela pessoa que precisa entender muito mais os **fundamentos**, conhecer mais do **negócio**, da **estratégia** e do **produto** que está entregando. Ou seja, ser um desenvolvedor mais generalista do que especialista, entre outras coisas.

Mantenho minhas ideias e opiniões sobre tudo isso até aqui, mas com novos olhares. Tenho usado muito a IA para **acelerar o desenvolvimento de interfaces**. Eu a conecto ao *[Figma MCP](https://www.figma.com/mcp-catalog/)* e, através de uma *skill* que criei, faço com que ela pegue todo o contexto de design e o transforme em código. Ela quebra esse arquivo do Figma em partes menores, usando **subagentes** para cada etapa e seguindo rigorosamente os padrões de projeto adotados pelo time e os estilos definidos no *design system* da empresa. Deixo critérios bem claros sobre o que ela pode ou não fazer a partir do design do Figma, e ela está se saindo surpreendentemente bem até agora.

Não é novidade que esses novos modelos, como o *Codex 5.5* e o *Claude Opus 4.8*, são cada vez melhores. Então, não chega a ser uma surpresa por ser algo inesperado, mas sim porque você pisca e já tem algo supernovo para aprender, ou a IA já faz muito mais do que você achava que ela seria capaz.

Então é isso: eu tenho usado muito a IA para gerar código, principalmente de interfaces, páginas, componentes etc. Mas não só para isso. Tenho-a utilizado em quase tudo o que faço hoje no meu trabalho como desenvolvedor e quero compartilhar com você algumas das **melhores formas de usar a IA**, independentemente do seu nível de experiência.

## Formas comuns de usar a IA

### Assistente de código

Antes de existir a IA como conhecemos, os editores de código como *VS Code*, *IntelliJ*, *Vim*, entre outros, já possuíam o recurso de *autocomplete*. No entanto, ele era bem limitado, autocompletando apenas uma palavra, uma linha ou, no máximo, um bloco de código.

Atualmente, com as IAs integradas diretamente nos editores, é muito comum que esse *autocomplete* gere uma **função inteira, um componente ou até uma tela completa**. E, normalmente, essa sugestão é baseada nos padrões do seu próprio repositório ou pasta de trabalho. São padrões de código seus ou funções que já existem no seu projeto que a IA aprende e sugere para você usar. Os devs de hoje estão teclando cada vez menos. Alguns só precisam usar a tecla `TAB` e a IA faz o resto *(risos)*.

### Rubber Duck e Copiloto

Esta é a minha forma favorita de usar a inteligência artificial. É como ter um **patinho de borracha** (*rubber duck*), sendo o meu ouvinte (no caso, leitor) mais fiel e discutindo de forma técnica o que estou pensando no momento.

Mas não para por aí. Gosto de enxergá-la como um verdadeiro **copiloto**. Aquele que escuta, sugere e executa. Atualmente, estamos na era da **"programação agêntica"**, isto é, os agentes de IA executam tudo o que você deseja fazer. Basta você escrever um documento de especificações (*specs*) sobre o seu projeto e a *feature* que quer desenvolver, e o agente sozinho lê, entende e executa. É quase como o Homem de Ferro com o *Jarvis*, mas com uma interface quase nula. Tem pessoas que fazem isso sem nem sequer abrir um editor de código, e eu acho isso surreal.

![Gif do homem de ferro usando o Jarvis](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5uYWQzcTZrOGFjMjRvN2puN2w0cm1pbDNuY3JxanhmNTRycno2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Bg0mdxmTVzjWZHtGat/giphy.gif)

A questão é que, nessa forma de usar, eu prefiro ter **mais controle** sobre o que será feito. Não costumo escrever *specs* (ou seja, uma especificação completa e automatizada do que vou implementar). Como trabalho mais com o desenvolvimento de interfaces, costumo escrever um *prompt* dedicado para cada componente, seção ou tela que vou construir.

É nesse *prompt* que eu defino quais *skills* quero que a IA use, quais arquivos de memória sobre o meu projeto ela precisa ler, quais padrões deve seguir e quais arquivos já implementados no projeto ela pode usar como base para desenvolver o novo pedido. E é aqui que eu explico para a IA como estou pensando em desenvolver o recurso. Explico para ela como explicaria para o patinho de borracha na minha mesa, detalhando o porquê de eu querer seguir por determinado caminho de implementação e não por outro; por que ela deve criar *server components* e não *client components*; por que deve evitar usar funções *request-time* do *Next.js* nos componentes de servidor, etc. Eu busco dar mais contexto das decisões que ela precisa tomar do jeito que eu faria, porque **eu conheço o repositório em que estou trabalhando muito melhor do que ela**.

Depois dessa nossa conversa amigável, peço que ela monte um **plano de execução**. Muitos editores e ferramentas de IA integradas contam com isso hoje: o chamado *Plan Mode*. É extremamente útil, pois me permite entender o mapa de execução que ela traçou. Se houver algo ali que ela pensou em fazer de um jeito que eu sei que trará problemas, eu a corrijo na hora e peço para seguir pelo caminho mais seguro.

Normalmente, essa tem sido a abordagem com a qual me sinto mais confortável, pois continuo no controle das decisões importantes. Dou o contexto do que temos atualmente, o que quero desenvolver e como seguiria o desenvolvimento, considerando que conheço melhor o negócio, o nosso produto e os contratos das nossas APIs. E quase sempre ela **"mata a pau"** o pedido, acertando cerca de 90% do que precisa ser desenvolvido, cabendo a mim apenas os pequenos ajustes finais.

### Revisora de código

Se a IA gera o código, cabe a **ela** também fazer, pelo menos, uma primeira revisão. Concorda?

Essa é outra forma que tenho adotado bastante: usá-la para **revisar o código**. A IA é excelente para ler dezenas de linhas rapidamente e encontrar padrões ou desvios que estabelecemos. Basicamente, eu digo a ela como quero que faça a revisão, o que deve observar, se determinado trecho cria um padrão de *code smell* no projeto ou se aquele código pode se tornar impossível de manter no futuro.

Esse processo fica ainda mais interessante se você utiliza **diferentes modelos** para trabalhar. Você pode usar um modelo voltado para código para implementar a *feature* e o *Claude*, por exemplo, para revisar. Desse jeito, a revisão fica menos parcial e as chances de "vícios" do modelo que gerou o código se repetirem são bem menores.

### Tutora de programação

Essa forma aqui é fantástica, principalmente se você é iniciante ou está aprendendo uma tecnologia nova. Use a IA como uma **tutora de programação personalizada**.

Não seria incrível se, enquanto você estuda online fazendo seus cursos, tivesse um mentor ao seu lado para ajudar a entender os conceitos e explicações mais difíceis? Pois é, a IA é uma forte aliada nesse sentido.

Pedir para a IA ajudar a entender aquela linha de código específica, aquela função complexa ou um conceito da linguagem que você está estudando vai **acelerar demais o seu processo de aprendizagem**. Antigamente, precisávamos interromper o estudo para ir ao Google, pesquisar a dúvida, abrir vários posts ou links, ler todos eles para sintetizar o que estavam explicando e, só então, absorver o conteúdo.

Hoje em dia, você pede para a IA fazer isso e pode até usar comandos como: *"Explique-me como se eu tivesse 5 anos"*. Ela vai adaptar a linguagem de uma forma tão didática que se torna impossível não entender.

Essa é uma das maneiras que acredito que mais podem potencializar os seus estudos, então, sempre que possível, faça uso dela.

---

## Conclusão

Se você é desenvolvedor e ainda não está usando IA, **você está ficando para trás**. Ela é, sem dúvidas, uma ferramenta poderosa de produtividade que potencializa (e muito) as suas capacidades. Se você era o tipo de dev que conseguia pensar muito bem nas soluções, mas demorava para escrever o código, com a IA esse gargalo acabou. Ela faz isso por você e de forma extremamente rápida, resolvendo a lentidão na escrita e deixando você livre para focar na arquitetura e na solução de outros problemas.

No começo, é perfeitamente normal se sentir inseguro com o que a IA gera. Mas, enquanto você se mantiver no controle, orquestrando as soluções e guiando a ferramenta para os melhores caminhos, você estará seguro.

Gosto de pensar que, de certa forma, a IA **devolve um pouco do seu tempo**, e esse tempo precioso você pode usar para se tornar ainda melhor no que faz. Para mim, é um cenário de ganha-ganha.

Mas seguimos de olho no futuro.