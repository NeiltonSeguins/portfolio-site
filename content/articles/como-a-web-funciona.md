---
title: "Como a Web funciona: conhecendo o modelo OSI"
description: "Entenda como funciona a comunicação entre redes de computadores, as sete camadas do modelo OSI e como o front-end que você desenvolve se encaixa nisso."
slug: "como-a-web-funciona"
date: "2026-02-24"
cover: "https://images.unsplash.com/photo-1664526937147-93be5ee5ff92?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["redes", " OSI"]
---

Esses dias estava lendo um livro bem interessante sobre [segurança no front-end](https://www.casadocodigo.com.br/products/livro-seguranca-frontend) e me deparei com alguns conceitos sobre como a web funciona que, confesso, já nem me lembrava mais. São aquelas coisas que você aprende na graduação, usa apenas para resolver uma prova e depois esquece.

Então resolvi escrever sobre isso aqui, já que, das três principais maneiras que eu uso para aprender, escrever é uma delas (as outras duas são ler e explicar o que entendi, rsrs). E, no futuro, quero ligar isso com o que estou aprendendo sobre segurança front-end, em uma possível série de artigos como este.

## Por que você deve entender sobre redes?

Se você é uma pessoa que desenvolve para a web, você precisa entender um pouco de como ocorre a comunicação entre **redes de computadores**. E, sendo bastante óbvio, o desenvolvedor web está diretamente inserido em uma das camadas de comunicação de redes, pois as aplicações web são uma interface entre o cliente e o servidor. Por isso, é super importante entendermos um pouco sobre isso.

Quando você abre o navegador, faz uma busca e abre uma página, você faz uma requisição que sai do seu computador, viaja por cabos de rede, passa pelo provedor de internet e vários outros caminhos até chegar ao destino, o servidor. E, quando o servidor responde, esse caminho se repete. Mas como a requisição sabe qual caminho fazer para chegar até você?

É isso que vamos descobrir.

![Cachorro sentado usando um laptop](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazZtcDRwdXVkanAwY2dqdXh3aHNxdzdxcHg4emtwcGF4ZzZsOGFtNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1kkxWqT5nvLXupUTwK/giphy.gif)

## Protocolo OSI

Hoje em dia é muito raro, mas antigamente era comum as pessoas enviarem cartas. Elas escreviam, compravam um envelope, endereçavam quem iria receber a carta (destinatário) e colocavam seus nomes (o remetente, quem envia) para poder enviar essa carta nos correios ou no serviço postal de suas cidades. Demorava de 3 a 4 dias para a carta chegar ao destino e, acredite, por muito tempo essa foi a única forma de comunicação de algumas pessoas.

Pois bem, o processo de enviar uma requisição para um servidor é parecido com o processo de enviar uma carta. Existem algumas etapas até a carta chegar ao destino final. Na comunicação de redes de computadores existe algo parecido, chamado de **modelo OSI** (*Open Systems Interconnection*).

O modelo OSI (ou protocolo OSI) é uma estrutura conceitual de sete camadas criada para **padronizar a comunicação entre diferentes sistemas de computador**, funcionando como uma linguagem universal para redes. Ele classifica protocolos em grupos específicos, as camadas, cada uma com uma função própria para uma comunicação eficaz.

Então, vamos conhecer essas camadas e onde o front-end se encaixa!

## As sete camadas do modelo OSI

O modelo OSI é um padrão para os [protocolos de rede](https://www.cloudflare.com/pt-br/learning/network-layer/what-is-a-protocol/). Esses protocolos são regras de comunicação usadas para conectar dois ou mais computadores. E, como dito anteriormente, cada camada tem uma função específica nessa comunicação. Então vamos entender cada uma delas.

### Camada 1 — Física

Essa camada define as especificações elétricas e mecânicas, transmitindo os dados como **bits brutos** através de cabos ou sinais sem fio. Fazendo analogia aos correios, a camada física seria como as estradas que os caminhões com as cartas percorreriam até o destino.

De forma mais direta, nesta camada são especificados dispositivos como hubs, cabos Ethernet, Wi-Fi, fibra óptica, extensões, repetidores etc.

### Camada 2 — Enlace de dados

Esta camada organiza os dados em *quadros* (*frames*). Ela realiza o controle de erros e o acesso ao meio de transmissão, além de gerenciar o endereçamento físico ([MAC](https://www.controle.net/faq/o-que-e-mac-address)) na mesma rede local.

Lembrando dos correios, essa camada funciona como o fiscal que confere cada pacote, vê se não tem nenhum defeito, se a carta está com endereço do remetente e do destinatário etc. Um exemplo desta camada é o protocolo [ARP](https://www.hostgator.com.br/blog/arp-guia-iniciantes/) (*Address Resolution Protocol*).

### Camada 3 — Rede

Esta camada é responsável pelo endereçamento, roteamento e entrega dos pacotes de dados entre diferentes redes. Ela determina o melhor caminho para os dados entre o dispositivo de origem e o de destino. É aqui que entram protocolos como [IP](http://cloudflare.com/pt-br/learning/network-layer/internet-protocol/) e [ICMP](https://aws.amazon.com/pt/what-is/icmp/).

É como se, nos correios, eles verificassem quem está enviando e quem está recebendo a carta e, dependendo do número de cartas no dia, escolhessem o melhor caminho e qual carta deveria ser enviada primeiro.

E depois que as cartas chegam na agência dos correios de destino, o que acontece?

### Camada 4 — Transporte

Quando a carta chega na agência dos correios de destino, ela é distribuída entre os carteiros que irão fazer a entrega aos destinatários.

No modelo OSI, a camada de transporte garante a entrega confiável dos dados entre os sistemas finais. Ela lida com a qualidade do serviço, para que os dados cheguem na ordem correta, sem erros, sem duplicações e com consistência. É nessa camada que vemos [protocolos comuns como TCP (*Transmission Control Protocol*) e UDP (*User Datagram Protocol*)](https://www.alura.com.br/artigos/quais-as-diferencas-entre-o-tcp-e-o-udp).

### Camada 5 — Sessão

Esta camada gerencia a abertura, manutenção e fechamento de conexões (sessões) entre dispositivos. Ela também dá suporte a elas, como registro de logs e realização de tarefas de segurança. Exemplos: NetBIOS, RPC (*Remote Procedure Call*).

### Camada 6 — Apresentação

Esta camada é responsável pela tradução, criptografia e compressão dos dados para garantir que as informações sejam compreendidas pela aplicação receptora. Ela lida com a conversão de formatos e segurança, como codificação JPEG, GIF, ASCII, SSL/TLS etc.

### Camada 7 — Aplicação

Esta é a camada que consome os dados. Nela temos os programas que garantem a interação humano-máquina. Aqui conseguimos enviar e-mails, transferir arquivos, acessar websites etc. Exemplos: HTTP (*Hypertext Transfer Protocol*).

É nesta camada que o desenvolvedor web está inserido. É aqui que é a sua praia, e é por isso que é importante entender todo o fluxo de comunicação de redes de computadores para sabermos onde o nosso trabalho se encaixa na fila do pão.

## O caminho inverso

Eu confesso que é um pouco contraintuitivo, mas todas essas camadas, na prática, não ocorrem exatamente nessa ordem. Normalmente, em uma interação comum na web, você começa pela camada 7 e vai até a mais básica, a camada 1. Em resumo:

1. O usuário fala com o navegador (Camada 7)  
2. O dado é criptografado (Camada 6)  
3. A conexão é controlada (Camada 5)  
4. TCP garante a entrega (Camada 4)  
5. IP encontra o caminho (Camada 3)  
6. Wi-Fi/Ethernet entrega localmente (Camada 2)  
7. Bits viajam no cabo/ar (Camada 1)

E, na prática, a web usa o chamado [modelo TCP/IP](https://www.fortinet.com/br/resources/cyberglossary/tcp-ip), e não o modelo OSI em toda a sua totalidade. O modelo OSI é mais um modelo teórico, em que muitas camadas são “fundidas” (por exemplo, sessão + apresentação no TLS).

E lembra que falei que o servidor faz o caminho inverso? Pois bem, seria algo mais ou menos assim:

| Camada OSI | CLIENTE (descendo) |  | SERVIDOR (subindo) |
| ---------- | ------------------ | - | ------------------ |
| 7          | HTTP / DNS         | → | HTTP / DNS         |
| 6          | TLS (Criptografia) | → | TLS (Criptografia) |
| 5          | Sessão             | → | Sessão             |
| 4          | TCP / UDP          | → | TCP / UDP          |
| 3          | IP (Roteamento)    | → | IP (Roteamento)    |
| 2          | Wi-Fi / Ethernet   | → | Wi-Fi / Ethernet   |
| 1          | Bits (Físico)      | → | Bits (Físico)      |

> No cliente, os dados descem pelas camadas do modelo OSI antes de atravessar a rede. No servidor, o processo ocorre de forma inversa, subindo das camadas físicas até a aplicação.

## Conclusão

Cada camada do modelo OSI pode ser explorada por ataques, mas, no dia a dia do front-end, as camadas superiores são as mais relevantes. Problemas na camada de transporte e criptografia podem expor dados (como conexões sem TLS ou configurações fracas de HTTPS), enquanto na camada de aplicação surgem ataques comuns ao desenvolvedor web, como XSS, CSRF, injeções e manipulação de requisições HTTP.

Entender como a requisição percorre essas camadas ajuda o desenvolvedor front-end a saber onde os dados podem ser interceptados, alterados ou explorados antes mesmo de chegar ao código JavaScript.

Mas isso é assunto para um próximo artigo.