[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 04 - Johnny está fazendo progresso?

Para treinar para uma maratona que está por vir, Johnny percorre uma longa distância todo sábado. Ele quer monitorar com que frequência o número de milhas que ele percorreu esse sábado excede o número de milhas que ele percorreu no sábado **anterior**. Isso é chamado um **dia de progresso**.

Crie uma função que receba um array de milhas percorridas todos os sábados e retorne o número total de dias de progresso de Johnny.

### Exemplos

```text
progressDays([3, 4, 1, 2]) ➞ 2
// Há dois dias de progresso, (3->4) e (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0
```

---

### Notas

- Percorrendo o **mesmo número de milhas** que da última semana não conta como um dia de progresso.