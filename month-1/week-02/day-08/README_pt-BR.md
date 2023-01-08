[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 08 - Combinação das letras de um número de telefone

Dada uma string contendo dígitos de 2 a 9 inclusive, retorne todas as possíveis combinações de letras que o número poderia representar. Retorne a resposta em **qualquer ordem**.

Um mapeamento de dígitos para letras (assim como em um teclado de telefone) é dado abaixo. Note que 1 não mapeia para nenhuma letra.

<p align="left">
  <img src="assets/Telephone-keypad2.png" alt="teclado de telefone">
</p>

### Exemplos

**Exemplo 1:**

```text
Entrada: digits = "23"
Saída: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**Exemplo 2:**

```text
Entrada: digits = ""
Saída: []
```

**Exemplo 3:**

```text
Entrada: digits = "2"
Saída: ["a","b","c"]
```

### Restrições

- `0 <= digits.length <= 4`
- `digits[i] é um dígito no intervalo ['2', '9'].`

---

### Notas

- N/A