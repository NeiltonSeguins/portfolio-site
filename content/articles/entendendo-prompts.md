---

title: "Prompts: a linguagem para conversar com modelos de IA"
description: "Entenda o que é um prompt, como ele funciona e como extrair o melhor resultado de um LLM."
slug: "prompts-a-linguagem-para-conversar-com-modelos-de-ia"
date: "2026-06-09"
cover: "https://images.unsplash.com/photo-1650844228078-6c3cb119abcd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["ia", "agentes-de-ia", "llm", "prompt"]
series: "Fundamentos de agentes de IA"
seriesOrder: 2
---

No artigo anterior, entendemos que os LLMs são, essencialmente, supercalculadoras de probabilidade textual. Eles não pensam como humanos. Eles preveem o próximo token com base no contexto que recebem.

Nós nos comunicamos com esses modelos usando linguagem natural, da mesma forma que nos comunicamos com outras pessoas. Os modelos conseguem trabalhar com isso tranquilamente, aplicando matemática para calcular quais são as próximas palavras ou tokens mais prováveis para responder ao que você enviou.

A sua mensagem para o modelo é o que chamamos de **prompt**. Ele é um dos conceitos mais importantes relacionados aos LLMs, e neste artigo vamos entender como ele funciona e como fazer o melhor uso dele.

## O que é um prompt?

Em termos simples, **um prompt é qualquer texto, instrução ou pergunta que você envia para um modelo de inteligência artificial.** É o ponto de partida que dispara o cálculo estatístico do modelo.

> O prompt é a interface entre o humano e o modelo. Ele é a ponte que traduz a sua intenção, o seu problema ou a sua dúvida em uma direção clara para a matemática da IA trabalhar.

Então pense comigo: se você quer que o modelo devolva a melhor resposta possível para o que precisa, será que é possível usar o prompt para aumentar essa chance?

Sim.

Você não terá uma resposta ultra, full, black master premium, mas certamente poderá obter algo muito melhor do que uma resposta rasa ou uma alucinação evidente. O prompt faz diferença.

Escrever um bom prompt não é sobre "conversar" de forma bonita, mas sim sobre construir um cenário que reduza as chances de erro (alucinação) e aumente as chances de acerto.

Mas como construir um bom prompt?

Primeiro, vamos entender sua anatomia.

## A anatomia de um prompt

Um bom prompt, capaz de gerar respostas melhores, costuma ser composto por quatro elementos fundamentais.

### 1. Instruções

É a ação direta que você quer que o modelo execute.

Comece sempre com verbos de ação claros:

* Escreva
* Resuma
* Analise
* Traduza
* Classifique

### 2. Contexto

Lembra que o LLM vive de probabilidade? O contexto serve para afunilar o universo de respostas possíveis.

Aqui você define o papel da IA, o público-alvo ou o cenário de fundo.

*Exemplo:*

> Atue como um especialista em marketing digital focado em pequenas empresas.

Notou que a instrução veio junto com o contexto? Isso é comum. O que importa é que você está dizendo ao modelo como ele deve se comportar. E outra, você não está invocando uma personalidade mágica para o modelo. Ele foi treinado com bilhões de exemplos e sabe como um especialista em marketing digital focado em pequenas empresas normalmente escreve, responde e raciocina.

### 3. Restrições

Dizer o que o modelo **não deve fazer** é tão importante quanto dizer o que ele deve fazer.

As restrições evitam que a IA saia dos trilhos.

*Exemplos:*

* Não use jargões técnicos.
* Mantenha a resposta com menos de 150 palavras.
* Não invente dados estatísticos.

Essa é, sem dúvida, uma das partes mais importantes do prompt.

Se você não fizer isso, ele pode assumir liberdades que não eram sua intenção: adicionar informações irrelevantes, usar termos muito técnicos, responder de forma excessivamente longa ou até inventar informações para preencher lacunas.

As restrições ajudam a direcionar a resposta para o caminho que você deseja.

### 4. Formato de saída

Você não precisa aceitar o texto exatamente da forma que a IA decidir entregar.

Você pode (e deve) moldar a resposta.

Peça resultados em formatos específicos:

* Tabelas
* Tópicos (*bullet points*)
* JSON
* E-mails prontos para envio
* Markdown
* XML

Esse é outro elemento que costuma melhorar bastante a qualidade das respostas.

> Se você quiser conhecer mais sobre prompts, recomendo muito o site Prompt Engineering Guide. A seção [Noções básicas de Prompt](https://www.promptingguide.ai/pt/introduction/basics) é um excelente ponto de partida.

Agora que entendemos a anatomia básica de um prompt, vamos conhecer algumas técnicas bastante úteis.

## Técnicas de prompt

Quando comecei a usar modelos de IA, eu ficava frustrado porque muitas respostas eram ruins e não serviam para o que eu queria fazer.

Depois de estudar mais sobre o assunto, percebi que o problema não estava necessariamente no modelo, mas na minha falta de conhecimento sobre como escrever bons prompts.

No início, encontrei muito material explicando os fundamentos. Mas o conteúdo que mais me ajudou foi o [Prompt Engineering Guide](https://www.promptingguide.ai/pt), que apresenta diversas técnicas de prompting e conceitos que ficaram muito populares nos últimos anos.

Vou compartilhar algumas das técnicas que mais me ajudaram a obter resultados melhores.

### 1. Zero-Shot Prompting

É uma técnica que consiste em fornecer apenas a instrução, sem exemplos.

Ela é útil para tarefas simples e bem definidas.

**Exemplo:**

> Explique o que é computação em nuvem para alguém sem conhecimento técnico.

É como fazer uma pergunta simples para um especialista e esperar uma resposta direta.

Funciona muito bem para tarefas básicas, mas pode gerar respostas superficiais quando o problema é mais complexo.

### 2. Few-Shot Prompting

É uma técnica que consiste em fornecer **exemplos de entrada e saída** para o modelo.

Isso ajuda o modelo a entender melhor o padrão que você deseja seguir.

**Exemplo:**

> Cliente: "Meu pedido está atrasado."
>
> Resposta: "Sinto muito pelo atraso. Vou verificar o status do seu pedido."
>
> Cliente: "Recebi o produto errado."
>
> Resposta: "Peço desculpas pelo ocorrido. Vou ajudá-lo a solicitar a troca."
>
> Cliente: "Quero cancelar minha compra."
>
> Resposta:

Esse exemplo representa o treinamento contextual de um assistente de atendimento ao cliente.

Na última interação, queremos que o modelo responda seguindo o padrão demonstrado pelos exemplos anteriores.

Você ainda pode complementar o prompt com contexto, instruções e restrições adicionais, mas os exemplos já ensinam ao modelo o formato esperado da resposta.

### 3. Chain-of-Thought Prompting

É uma técnica que incentiva o modelo a decompor um problema em etapas antes de responder.

**Exemplo:**

> Você é um consultor de negócios.
>
> Analise a situação abaixo seguindo estas etapas:
>
> * Identifique o problema principal.
> * Liste as possíveis causas.
> * Avalie os riscos.
> * Sugira soluções.
> * Apresente uma recomendação final.
>
> Situação:
>
> Uma loja virtual percebeu que as vendas caíram 25% nos últimos três meses, apesar de o investimento em marketing ter permanecido o mesmo.

Com essa sequência de etapas, você orienta o modelo sobre como estruturar o raciocínio.

Essa técnica é extremamente útil para problemas complexos, especialmente aqueles que envolvem análise, planejamento ou resolução lógica.

> Atualmente, muitos modelos já conseguem decompor problemas complexos naturalmente, sem que você precise solicitar explicitamente um raciocínio passo a passo. Isso não torna o Chain-of-Thought menos importante. Pelo contrário: entender essa técnica ajuda você a compreender como os modelos estruturam respostas e como pode guiá-los melhor.

Existem muitas outras técnicas de prompting que valem a pena conhecer.

Se você quiser se aprofundar no assunto, recomendo explorar toda a seção de técnicas do [Prompt Engineering Guide](https://www.promptingguide.ai/pt/techniques).

Mas e aí? Com os exemplos apresentados até aqui, você já consegue identificar os elementos de um bom prompt?

Se ainda não, o próximo tópico vai deixar isso mais claro.

## Escrevendo um bom prompt

O exemplo abaixo reúne todos os elementos que vimos até agora.

* **Contexto:** Atue como um social media especialista em negócios locais de gastronomia. Minha confeitaria é especializada em brigadeiros gourmet e bolos festivos, focada em um público jovem (20 a 35 anos) que valoriza estética e momentos de celebração.
* **Instrução:** Crie três ideias originais de posts para o feed do Instagram focadas em gerar engajamento (comentários e salvamentos).
* **Restrições:** Evite ideias clichês como "mostrar os bastidores" ou "apresentar os ingredientes". Foque em gatilhos de desejo e interatividade. Não use emojis em excesso.
* **Formato de saída:** Organize a resposta em uma tabela com as colunas "Ideia do Post", "Gancho Inicial (Legenda)" e "Chamada para Ação (CTA)".

Você cercou o modelo.

Ele agora sabe quem é o cliente, quem é o público-alvo, o que não pode sugerir e como deve entregar o resultado.

A probabilidade de gerar uma resposta útil aumenta significativamente.

---

## Escrevendo prompts cada vez melhores

Dominar a arte do prompt, isto é, a famosa *Engenharia de Prompts*, é o que separa usuários casuais de profissionais que realmente extraem valor da IA.

O prompt continua sendo um componente fundamental da interação com qualquer modelo.

Embora atualmente exista uma atenção crescente ao conceito de *Engenharia de Contexto* (*Context Engineering*), os prompts continuam sendo essenciais para extrair o máximo potencial dos LLMs.

Se você pretende construir **Agentes de IA** no futuro, sistemas capazes de executar tarefas com certo grau de autonomia, primeiro precisa aprender a interagir bem com os modelos.

Afinal, em sua essência, **um agente nada mais é do que um LLM operando continuamente com contexto, ferramentas e prompts bem estruturados.**