---

title: "O que é um LLM (e como ele pensa)"
description: "Entenda o que é um LLM, como ele funciona e por que ele pensa diferente do que você imagina."
slug: "o-que-e-um-llm-e-como-ele-pensa"
date: "2026-06-07"
cover: "https://images.unsplash.com/photo-1744900647430-965ccc7a6078?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["ia", "agentes-de-ia", "llm"]
series: "Fundamentos de agentes de IA"
seriesOrder: 1
--------------

Olá!

Enquanto estudava sobre **agentes de IA**, eu me dei conta de que ainda não estava familiarizado com os principais e mais importantes conceitos relacionados a eles. E, lendo mais sobre agentes, percebi que esses conceitos são fundamentais para entender qualquer coisa relacionada à IA, como LLM, prompt, contexto, entre outros.

Então resolvi escrever sobre o que venho aprendendo nessa jornada em uma série de artigos, para servir como referência para estudos futuros e ajudar quem estiver interessado em se aprofundar no assunto.

Vem comigo!

---

Quando começou o "boom" da IA com o ChatGPT, quem o utilizou ficou impressionado com o quanto ele respondia de forma parecida com um ser humano. Atualmente, é possível personalizar o modelo, definir um tom de voz, pedir que ele responda com gírias, use uma voz específica para ouvirmos ele "falando" etc.

De certa forma, humanizamos esses modelos de IA. Há quem os utilize como terapeuta ou conselheiro (o que considero bastante perigoso). Devido a essa humanização, é comum achar que eles "pensam", "refletem" ou possuem uma intenção por trás de cada palavra ou resposta.

> Mas, na real, como pensam esses modelos de IA?

É isso que vamos descobrir. Vamos entender como funcionam os motores desses modelos.

## O que é um LLM?

**LLM** é a sigla para *Large Language Model* (Grande Modelo de Linguagem). Em termos simples, ele é um arquivo de computador gigantesco que contém um **modelo estatístico**. Ele não tem consciência, não tem sentimentos e não possui um "eu". É apenas um conjunto enorme de parâmetros matemáticos representados em arquivos.

Pense no corretor ortográfico do seu celular. Quando você digita, ele começa a sugerir palavras. Essas palavras não são aleatórias. Apesar de o corretor errar algumas vezes, suas sugestões são baseadas na frequência com que determinadas palavras costumam ser escritas após as letras iniciais que você digitou.

Os LLMs são muito parecidos com um corretor ortográfico. Poderíamos dizer que um LLM é um **corretor ortográfico extremamente sofisticado, com acesso a uma quantidade gigantesca de padrões linguísticos**, capaz de sugerir muito mais do que apenas a próxima palavra.

Em resumo, o objetivo de um LLM é um só: **prever a próxima palavra mais provável**.

## As engrenagens por trás do motor

Para entender melhor como funcionam os LLMs, vamos analisar as engrenagens que os fazem funcionar.

### 1. Tokens

Os LLMs não leem palavras inteiras como nós, e muito menos letras isoladas. Eles processam o texto em pedaços chamados **tokens**.

* Um token pode ser uma palavra inteira (como `gato`), parte de uma palavra (`comis`, `são`) ou até mesmo um único caractere (`!`).
* Quando você digita uma pergunta, o modelo a transforma em uma sequência de números (IDs de tokens) para poder processá-la.

> Você pode associar essa forma que os modelos têm de "entender" as palavras que você envia a eles ao processo de alfabetização de uma criança. Ela precisa soletrar sílaba por sílaba para aprender a ler. Os modelos fazem algo vagamente parecido, mas apenas para facilitar a matemática por trás de tudo.

### 2. Probabilidade do próximo token

Esqueça a ideia de que a IA está buscando a resposta em uma enciclopédia interna. O que ela faz é pura matemática.

Se você fornecer a frase: *"O céu está..."*, o modelo analisa bilhões de padrões vistos durante seu treinamento e **calcula qual é o próximo token mais provável**.

* `azul` (85% de chance)
* `nublado` (12% de chance)
* `bananas` (0,0001% de chance)

Ele escolhe uma das opções mais prováveis e repete o processo para o token seguinte. Toda resposta que você recebe é resultado desse mecanismo.

É muito interessante entender esse comportamento, porque ele deixa claro que o modelo pode cometer erros.

> Mas como ele comete erros se é um computador fazendo contas exatas por trás de tudo?

É aí que entra a terceira engrenagem: o contexto.

### 3. A janela de contexto

Sabe quando você está conversando com alguém e a pessoa esquece o que você disse dez minutos atrás? Os LLMs sofrem de algo parecido. Eles possuem um limite de quantos tokens conseguem armazenar temporariamente e processar para calcular a próxima resposta. Esse limite é chamado de **janela de contexto**.

A janela de contexto é a quantidade máxima de tokens que o modelo consegue "enxergar" de uma só vez (somando sua pergunta e a resposta dele). Se a conversa for longa demais e ultrapassar esse limite, o modelo simplesmente "esquece" o início do chat.

À medida que esse limite é alcançado, o modelo vai perdendo acesso às informações mais antigas da conversa. É por isso que, quando um diálogo se estende demais, é comum que ele comece a responder de forma cada vez pior.

Nesses cenários, vemos algumas das limitações desses modelos e um fenômeno chamado **alucinação**, que discutiremos a seguir.

## Alucinações e limitações

Como o único objetivo do modelo é gerar um texto que *pareça* correto e fluido, às vezes ele falha de forma impressionante. É o que chamamos de **alucinação**.

> **Alucinação** ocorre quando o LLM gera informações factualmente incorretas, inventa dados, citações ou fontes, mas apresenta tudo isso com a confiança de um especialista.

Ele não está mentindo por maldade nem tentando enganar você. Para a matemática do modelo, aquela sequência de palavras inventadas parecia estatisticamente adequada para o contexto.

No início da popularização dos LLMs, era comum vermos notícias ou publicações mostrando modelos alucinando sobre eventos atuais ou fatos históricos. Hoje, com modelos mais maduros e acesso a mais ferramentas e informações, a quantidade de alucinações diminuiu consideravelmente. Ainda assim, elas continuam sendo possíveis.

### Outras limitações cruciais

* **Falta de bom senso básico:** eles não vivem no mundo físico. Coisas óbvias para uma criança de cinco anos podem ser um mistério para a IA.
* **Linha de chegada temporal:** eles estão limitados aos dados disponíveis durante seu treinamento. Sem ferramentas externas, não sabem o que aconteceu ontem. Por isso, é comum perguntar algo muito recente e o modelo simplesmente não ter conhecimento sobre o assunto ou responder com informações desatualizadas.

> "Mas ainda assim é muito mágico ele responder praticamente tudo o que pergunto ou me explicar o raciocínio para resolver uma questão que eu não estava entendendo."

Sim, isso é fantástico. Mas o que quero mostrar aqui é que não existe mágica nem aleatoriedade. Existe matemática aplicada sobre uma quantidade gigantesca de dados.

E vale destacar mais dois conceitos sobre LLMs para desmistificar essa ideia de conhecimento ou raciocínio.

## Conhecimento vs. raciocínio

Aqui está uma das maiores armadilhas mentais ao lidar com IAs. É muito fácil confundir **vasto conhecimento** com **capacidade de raciocínio**.

| O que parece                              | O que realmente é                                                                            |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| Ele sabe tudo sobre a história do Brasil. | Ele aprendeu padrões estatísticos presentes em milhões de textos sobre a história do Brasil. |
| Ele resolveu um problema lógico complexo. | Ele aplicou um padrão de resolução que já encontrou inúmeras vezes durante o treinamento.    |

O LLM não "entende" o significado intrínseco de uma maçã. Ele sabe quais palavras costumam aparecer associadas a ela, como *vermelha*, *fruta*, *árvore* e *morder*. Ele é um mestre da correlação, não necessariamente da compreensão.

Ele é muito bom porque treinou bastante. É o Rock Lee do Naruto nesse quesito.

---

## Conclusão

Entender esses conceitos abriu minha mente para usar melhor modelos de IA como ChatGPT, Claude, Gemini e outros. Hoje sei quando posso confiar mais em uma resposta e quando preciso revisá-la com cuidado. Sei escrever prompts melhores e utilizar melhor a janela de contexto, criando mecanismos para reduzir alucinações.

Atualmente, a IA generativa está evoluindo para a era dos **agentes** — sistemas em que os LLMs recebem ferramentas, autonomia para executar tarefas, acessar a internet e tomar decisões dentro de determinados limites.

Mas aqui está o pulo do gato: **se você não entender que o motor desse agente é um previsor estatístico de tokens, não vai conseguir utilizá-lo da melhor forma.**

Os LLMs não pensam como nós, e isso não é um defeito. É justamente essa arquitetura matemática única que os torna uma das ferramentas mais poderosas já criadas pela humanidade.

Agora que você conhece o motor, está pronto para aprender a pilotar. No próximo artigo da série, pretendo falar sobre prompts.

Até lá!
