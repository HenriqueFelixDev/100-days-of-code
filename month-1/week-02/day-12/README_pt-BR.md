[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 12 - Montanhas ou Vales

Uma montanha é um array com **exatamente um pico**.

- Todos os números à esquerda do **pico** são crescentes.
- Todos os números à direita do **pico** são decrescentes.
- O pico NÃO PODE estar no limite (primeiro ou último elemento do array).

Um vale é um array com **exatamente uma depressão**

- Todos os números à esquerda da **depressão** são decrescentes.
- Todos os números à direita da **depressão** são crescentes.
- A depressão NÃO PODE estar no limite (primeiro ou último elemento do array).

### Alguns exemplos de **montanhas** e **vales**:

```text
Montanha A:  [1, 3, 5, 4, 3, 2]     // 5 é o pico
Montanha B:  [-1, 0, -1]            // 0 é o pico
Montanha C:  [-1, -1, 0, -1, -1]    // 0 é o pico (tudo bem ter um planalto em ambos os lados)

Vale A: [10, 9, 8, 7, 2, 3, 4, 5]   // 2 é a depressão
Vale B: [350, 100, 200, 400, 700]   // 100 é a depressão
```

Nem **montanhas** nem **vales** (neither):

```text
Paisagem A: [1, 2, 3, 2, 4, 1]      // 2 picos (3, 4), não 1
Paisagem B: [5, 4, 3, 2, 1]         // Pico não pode ser um elemento nos limites do array
Paisagem B: [0, -1, -1, 0, -1, -1]  // 2 picos (0)
```

Baseado nas regras acima, escreva uma função que receba um array e retorne `"mountain"` (montanha), `"valley"` (value) ou `"neither"` (nenhum dos dois).

### Exemplos

```text
LandscapeType([3, 4, 5, 4, 3]) ➞ "mountain"

LandscapeType([9, 7, 3, 1, 2, 4]) ➞ "valley"

LandscapeType([9, 8, 9]) ➞ "valley"

LandscapeType([9, 8, 9, 8]) ➞ "neither"
```

---

### Notas

- Um pico não é exatamente o mesmo que **o maior valor** de um array. O **maior valor** é um número único, mas um array pode ter múltiplos picos. Contudo, se existir somente um pico no array, então é verdade que **pico = maior valor**.
- Veja os comentários para ter uma dica.