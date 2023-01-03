[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 03 - Espetos de churrasco

Você está no comando de uma grelha de churrasco. Um **espeto vegetariano** é um espeto que tem **apenas vegetais (-o)**. Um **espeto não vegetariano** é um espeto com **pelo menos uma peça de carne (-x)**.

Por exemplo, a grelha abaixo tem **4 espetos não vegetarianos** e **1 espeto vegetariano** (aquele no meio).

```text
["--xo--x--ox--",
"--xx--x--xx--",
"--oo--o--oo--",      <<< espeto vegetariano
"--xx--x--ox--",
"--xx--x--ox--"]
```

#### Exemplos

Dada uma grelha de churrasco, escreva uma função que retorne `[# espetos vegetarianos, # espetos não vegetarianos]`. No exemplo acima, a função deve retornar `[1, 4]`.

```text
 [
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--"
] ➞ [2, 3]

[
  "--oooo-ooo--",
  "--xxxxxxxx--",
  "--o---",
  "-o-----o---x--",
  "--o---o-----"
) ➞ [3, 2]
```

---

### Notas

- NA