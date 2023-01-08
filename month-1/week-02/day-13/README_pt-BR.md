[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 13 - Precisa de Ajuda com Sua Embalagem?

Você chega no caixa do supermercado e tem apenas um limitado número de sacolas de compras com você. Mão de vaca como é, você odeia comprar sacolas extras quando você tem dezenas em casa, mas que esqueceu de trazer!! Você consegue colocar toda sua compra nas sacolas que você tem nesse momento?

Cada sacola pode carregar no máximo 10kg e cada item que você comprou pesa entre 1 e 10kg.

Crie uma função que receba 2 parâmetros: uma lista de pesos de cada item e o número de sacolas que você está carregando. Retorne `True` se há espaço suficiente nas sacolas para guardar todos os itens, caso contrário, retorne `False`.

### Exemplos

```text
CanFit(new int[] { 2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2 }, 4) ➞ True
// Sacola 1 = [2, 1, 2, 5] (10kg)
// Sacola 2 = [4, 3, 3] (10kg)
// Sacola 3 = [6, 2, 1, 1] (10kg)
// Sacola 4 = [9] (9kg)

CanFit(new int[] { 2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2 ], 4) ➞ False
// Sacola 1 = [2, 8] (10kg)
// Sacola 2 = [3, 7] (10kg)
// Sacola 3 = [2, 4, 4] (10kg)
// Sacola 4 = [7, 3] (10kg)
// dois itens de 1kg ficaram de fora!
```

---

### Notas

- Todos os pesos serão números inteiros entre 1 e 10kg inclusive.
- Os itens podem ser embalados em qualquer ordem.
- Pode haver mais de uma maneira de guardar todos os itens disponíveis na sacola.