---
title: "O que são ataques DoS e DDoS"
description: "Entenda o que são ataques DoS e DDoS e como eles afetam a segurança do seu frontend."
slug: "o-que-sao-ataques-dos-e-ddos"
date: "2026-02-24"
cover: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["segurança", " ataques", " frontend"]
---

Dando continuidade à série de artigos que falam sobre segurança no front-end, hoje quero falar sobre os **ataques de negação de serviço** e os **ataques de negação de serviço distribuídos**, os chamados DoS e DDoS, respectivamente.

É muito comum associarmos esses ataques apenas à infraestrutura de rede ou a servidores de banco de dados, mas o front-end pode esconder vulnerabilidades e dinâmicas bem específicas para esse tipo de ataque.

Vamos entender como isso funciona!

## DoS vs DDoS

Um [ataque de negação de serviço (DoS)](https://www.cloudflare.com/pt-br/learning/ddos/glossary/denial-of-service/) é um tipo de ataque em que um ator malicioso tem como objetivo tornar um computador ou outro dispositivo indisponível para os usuários, interrompendo o funcionamento normal do sistema. Geralmente, esses ataques funcionam sobrecarregando uma máquina com várias solicitações, até que o tráfego normal não possa ser processado, resultando na negação do serviço para o usuário.

Quando esse ataque se origina de muitas fontes distribuídas (geralmente uma rede de computadores infectados chamada *botnet*), dizemos que ele é um ataque de negação de serviço distribuído, ou um ataque DDoS.

![Esquema da diferença entre ataques DoS e DDoS](https://www.cloudflare.com/img/learning/ddos/glossary/dos-attack/dos-vs-ddos-attack.png)  
> Imagem: https://www.cloudflare.com/pt-br/learning/ddos/glossary/denial-of-service/

## Como esses ataques afetam ou usam o frontend?

Quando falamos de frontend, podemos dizer que os ataques se enquadram em três cenários:

- travar o navegador do usuário (*Client-side DoS*);  
- usar o frontend como arma;  
- atacar a infraestrutura que entrega o frontend (ataques de camada 7).

Vamos explorar esses três cenários com alguns exemplos.

### Client-side DoS

Neste cenário, o ataque não visa derrubar o servidor, mas sim travar a interface para o usuário final, consumindo toda a memória ou processamento da aba do navegador. O atacante pode explorar uma falha que injeta milhares ou milhões de elementos invisíveis no HTML, fazendo o navegador esgotar a memória RAM do computador do usuário e fechar (*crash*).

Outro cenário é imaginar um site em que o JavaScript no frontend usa uma expressão regular complexa e mal otimizada para validar um campo de formulário, como um e-mail, por exemplo. Um atacante pode inserir uma string maliciosa específica que faz o motor de regex travar a thread principal do navegador instantaneamente, entrando em um *loop* catastrófico.

### Frontend como arma

Neste cenário, o ator malicioso usa o frontend e os navegadores dos usuários para atacar o backend ou terceiros. Os ataques mais comuns aqui são os de [XSS (Cross-Site Scripting)](https://www.kaspersky.com.br/resource-center/definitions/what-is-a-cross-site-scripting-attack), que injetam código malicioso com o objetivo de criar botnets.

Se sua aplicação tem uma falha de XSS, o atacante pode injetar um script malicioso no seu frontend. Toda vez que um usuário acessa a página, esse script roda no navegador dele, sem ele perceber, fazendo com que ele envie milhares de requisições para um servidor. Se você tem 10 mil usuários acessando seu site contaminado, o atacante acaba de ganhar 10 mil máquinas participando de um ataque DDoS.

### Ataques de camada 7 (Aplicação)

Neste cenário, os ataques são focados na lógica da aplicação e são os mais difíceis de detectar, pois as requisições parecem vir de usuários reais usando o frontend. Hoje em dia, é muito comum o uso de bots, agentes automatizados ou navegadores *headless* (navegadores controlados por código, sem interface gráfica, como [Puppeteer](https://pptr.dev/)).

Esses bots ou navegadores entram no seu frontend e clicam repetidamente nas ações mais “caras” da aplicação. Por exemplo: submeter um formulário de busca com filtros complexos ou clicar sem parar no botão de “Gerar relatório em PDF”, algo que demande alto processamento da sua aplicação.

Outro exemplo de ataque que pode ocorrer neste cenário é a **[injeção de GraphQL](https://blog.convisoappsec.com/seguranca-em-graphql/#:~:text=A%20vulnerabilidade%20de%20controle%20de,fornecer%20acesso%20aos%20registros%20solicitados.&text=Nesse%20exemplo%2C%20a%20consulta%20busca%20as%20informa%C3%A7%C3%B5es%20de%20um%20usu%C3%A1rio,e%20privil%C3%A9gios%20de%20cada%20usu%C3%A1rio.)**. Se o seu frontend usa GraphQL para se comunicar com o backend e possui vulnerabilidades, um atacante pode injetar uma consulta maliciosa para obter acesso não autorizado a dados sensíveis ou realizar operações indesejadas no sistema.

Nesse tipo de ataque, o invasor pode conseguir informações e dados que normalmente estariam fora dos limites de sua autorização, ou criar um ataque DoS devido à realização de consultas complexas e aninhadas, levando a uma sobrecarga no sistema e resultando em uma negação de serviço.

## Como proteger seu frontend

A defesa do seu frontend deve ser uma combinação de boas práticas de código e ferramentas de infraestrutura. Em nível de código, podemos pensar em não permitir o envio de várias requisições em pouco tempo. Uma boa prática é implementar *Rate Limiting*, isto é, um limite para o número de vezes que um usuário (ou IP) pode realizar uma ação específica no frontend em um determinado intervalo de tempo.

Exemplo: X requisições para a API em 30 segundos, ou permitir clicar no botão de login apenas 2 vezes por minuto.

Em nível de infraestrutura, podemos citar o [WAF](https://www.cloudflare.com/pt-br/learning/ddos/glossary/web-application-firewall-waf/) (*Web Application Firewall*), que é uma solução de segurança baseada em proxy reverso que protege aplicações web, filtrando e monitorando o tráfego HTTP entre o site e o sistema. Ele atua na camada 7 (aplicação), bloqueando ataques comuns como injeção de SQL, XSS, manipulação de cookies e DDoS. Serviços como o Cloudflare usam WAF para garantir a segurança de aplicações.

Inclusive, a título de curiosidade, você pode conferir casos de ataques DDoS famosos que aconteceram nos últimos anos [clicando aqui](https://www.cloudflare.com/pt-br/learning/ddos/famous-ddos-attacks/).

---

## Conclusão

Como podemos ver, ataques DoS e DDoS não afetam apenas servidores ou o backend das aplicações. Com vulnerabilidades mal tratadas, o seu frontend pode se tornar um alvo ou um vetor de ataque a sistemas de terceiros, seja com injeção de código malicioso para travar o navegador do usuário, seja na criação de uma botnet, uma rede de computadores infectados e maliciosos para atacar empresas e serviços.

Os atacantes estão sempre buscando alguma brecha para atingir seus objetivos, então é fundamental conhecer essas falhas e como corrigi-las.

Pretendo trazer mais artigos explorando alguns tipos de ataques comuns no frontend e como evitá-los. Então, até lá!