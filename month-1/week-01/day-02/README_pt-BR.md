[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Day 2 - Procurando o Nemo

Você recebeu uma string de palavras. Você precisa encontrar a palavra "Nemo" e retornar uma string como essa: `I found Nemo at [a posição da palavra que você encontrou nemo]!`.

Se você não encontrar a palavra Nemo, retorne `I can't find Nemo :(`.

#### Exemplos

```text
// Nemo é a 4ª palavra
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// Nemo é a 1ª palavra
findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// Nemo é a 2ª palavra
findNemo("I Nemo am") ➞ "I found Nemo at 2!"
```

---

### Notas

- `! , ? .` são sempre separados da última palavra.
- `Nemo` sempre aparecerá como **Nemo**(primeira letra maiúscula) e não NeMo ou outras variações de maiúsculas e minúsculas.
- `Nemo's`, ou qualquer palavra que possua Nemo com algo atrás, não conta como procurando o Nemo.
- Se há múltiplas palavras **Nemo** na sequência, somente retorne a posição da primeira.
