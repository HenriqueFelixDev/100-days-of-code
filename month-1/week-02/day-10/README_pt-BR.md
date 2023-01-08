[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 10 - Árvores Binárias de Busca Exclusivas

Dada a entrada `n` (número inteiro), quantas árvores binárias de busca exclusivas (**BST's**), que armazenam valores de 1 até `n`, podem ser formadas?

### O que é uma árvore binária de busca?
Árvore binária de busca ou BST (binary search tree) é uma estrutura de dados que armazena valores numéricos de forma ordenada. 

Cada número é chamado de nó. Os nós que descendem de outro nó são chamados de nós filhos. Como o próprio nome sugere, em uma árvore binária cada nó pode ter nó máximo 2 nós filhos. O nó que está no topo e que inicia a árvore é chamado de nó raiz e a partir dele, outros valores são adicionados na árvore usando os seguintes critérios:

 - Números maiores que ele são adicionados à sua direita.
 - Números menores que ele são adicionados à sua esquerda.

Todos os nós da árvore devem seguir esses critérios.

#### Exemplo:

<svg width="300" height="250" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:pdf="http://ns.adobe.com/pdf/1.3/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" space="preserve" version="1.0" viewBox="0 0 289.33 253" xmlns:xap="http://ns.adobe.com/xap/1.0/" xmlns="http://www.w3.org/2000/svg">
<g transform="matrix(1.012 0 0 1.012 180.09 42.504)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-42.312504" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-42.312504" y="-8.09375" font-size="24px" style="line-height:1.25">8</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 104.19 98.164)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-42.312504" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-42.312504" y="-8.09375" font-size="24px" style="line-height:1.25">3</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 255.99 98.164)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-50.75" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-50.75" y="-8.09375" font-size="24px" style="line-height:1.25">10</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 53.587 174.06)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-42.312504" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-42.312504" y="-8.09375" font-size="24px" style="line-height:1.25">1</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 154.79 174.06)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-42.312504" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-42.312504" y="-8.09375" font-size="24px" style="line-height:1.25">6</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 306.59 174.06)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-50.75" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-50.75" y="-8.09375" font-size="24px" style="line-height:1.25">14</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 114.31 244.9)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-42.312504" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-42.312504" y="-8.09375" font-size="24px" style="line-height:1.25">4</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 186.99 244.74)" stroke-width="2">
<circle transform="translate(78.174 -14.842)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-34.312504" y="-8.09375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-34.312504" y="-8.09375" font-size="24px" style="line-height:1.25">7</tspan></text>
</g>
<g transform="matrix(1.012 0 0 1.012 255.99 244.9)" stroke-width="2">
<circle transform="translate(70 -15)" cx="-105" cy="-2" r="20" fill="none" stroke="currentColor"/>
<text x="-50.062504" y="-8.34375" fill="currentColor" font-family="'DejaVu Sans'" style="line-height:0%" space="preserve"><tspan x="-50.062504" y="-8.34375" font-size="24px" style="line-height:1.25">13</tspan></text>
</g>
<g transform="rotate(233.29 124.62 83.805)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v43.936"/>
</g>
<g transform="matrix(.59774 -.80169 -.80169 -.59774 156.41 233.81)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v43.936"/>
</g>
<g transform="rotate(213.22 106.81 119.54)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v39.919"/>
</g>
<g transform="matrix(.83655 -.5479 -.5479 -.83655 7.2566 278.15)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v39.919"/>
</g>
<g transform="matrix(.83655 -.5479 -.5479 -.83655 159.56 277.89)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v39.919"/>
</g>
<g transform="rotate(213.22 218.72 125.05)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v36.278"/>
</g>
<g transform="matrix(.87594 -.48242 -.48242 -.87594 39.63 340.2)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v31.131"/>
</g>
<g transform="rotate(208.84 143.87 145.08)" fill="currentColor" stroke="currentColor" stroke-width="2">
<path d="m159.86 60.696-3.048 14.192h6.096z"/>
<path d="m159.85 70.84v31.131"/>
</g>
</svg>

### Exemplos

```text
Entrada: 3
Saída: 5
Explicação:
Dado n = 3, há um total de 5 BST's exclusivos:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

### Restrições

- `1 <= n <= 19`

---

### Notas

- N/A