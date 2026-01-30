---
title: "Guia de Estilos Markdown"
description: "Um artigo de exemplo para testar todos os elementos Markdown suportados pelo blog e verificar a estilização."
slug: "guia-de-estilos-markdown"
date: "2024-05-20"
cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
tags: ["design", "markdown", "teste"]
---

Este artigo serve como um teste de fumaça para garantir que todos os elementos básicos de tipografia e formatação estejam renderizando corretamente no seu blog.

## Títulos

Abaixo estão os exemplos de títulos secundários (H2 a H4). O título do artigo já é um H1.

### Subtítulo H3
Esta é uma seção dentro de um tópico maior.

#### Subtítulo H4
Para quando você precisa de granularidade extra.

---

## Tipografia Básica

Podemos ter texto em **negrito**, *itálico*, ou até ***ambos***. Também suportamos ~~taxado~~ para correções.

Se precisarmos citar código inline, usamos crase: `const a = 10;`.

> Blockquotes são ótimos para citações ou notas de destaque. Eles devem se destacar visualmente do restante do texto.

---

## Listas

### Lista não ordenada
*   Item um
*   Item dois
    *   Subitem A
    *   Subitem B
*   Item três

### Lista ordenada
1.  Primeiro passo
2.  Segundo passo
3.  Terceiro passo

---

## Blocos de Código

Aqui está um exemplo de código JavaScript/Typescript com syntax highlighting:

```typescript
interface User {
  id: number;
  name: string;
}

function greet(user: User): string {
  return `Olá, ${user.name}!`;
}

const me = { id: 1, name: "Neilton" };
console.log(greet(me));
```

E um exemplo em Python:

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

---

## Tabela

Se o seu renderizador suportar GFM (GitHub Flavored Markdown), esta tabela deve aparecer formatada:

| Recurso | Suporte | Notas |
| :--- | :---: | ---: |
| Tabelas | Sim | Alinhamento configurável |
| Imagens | Sim | Com legendas (alt) |
| Código | Sim | Syntax Highlighting |

---

## Links e Mídia

Visite o [Google](https://google.com) para mais informações.

### Imagem no corpo do texto

![Uma paisagem aleatória](https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop)
*Legenda: Uma paisagem dramática para testar a renderização de imagens.*

---

Isso conclui o nosso guia de estilos!
