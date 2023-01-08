[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 14 - O Algoritmo de Criptografia de Karaca

Faça uma função que criptografe um valor de entrada com esses passos:

Entrada: `"apple"`

Passo 1: Inverta os caracteres da entrada: `"elppa"`

Passo 2: Substitua todas as vogais usando o seguinte gráfico:
```text
a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
```
Passo 3: Adicione "aca" ao final da palavra: `"1lpp0aca"`

Saída: `"1lpp0aca"`

### Exemplos

```text
Encrypt("banana") ➞ "0n0n0baca"

Encrypt("karaca") ➞ "0c0r0kaca"

Encrypt("burak") ➞ "k0r3baca"

Encrypt("alpaca") ➞ "0c0pl0aca"
```

---

### Notas

- Todas as entradas são strings sem letras maiúsculas e todas as saídas precisam ser strings.