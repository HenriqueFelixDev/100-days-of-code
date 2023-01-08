[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 11 - Restaurar Endereço de IP

Dada uma string `s` contendo somento dígitos, retorne todos os possíveis endereços de IP válidos que podem ser obtidos de `s`. Você pode retorná-los em **qualquer** ordem.

Um **Endereço de IP válido** consiste de exatamente 4 números inteiros, com cada inteiro entre 0 e 255, separados por ponto e sem ter zeros na frente. Por exemplo, "0.1.2.201" e "192.168.1.1" são endereços de IP **válidos** e "0.011.255.245", "192.168.1.312" e " "192.168@1.1" são endereços de IP **inválidos**.

### Exemplos

**Exemplo 1:**

```text
Entrada: s = "25525511135"
Saída: ["255.255.11.135","255.255.111.35"]
```

**Exemplo 2:**

```text
Entrada: s = "0000"
Saída: ["0.0.0.0"]
```

**Exemplo 3:**

```text
Entrada: s = "1111"
Saída: ["1.1.1.1"]
```

**Exemplo 4:**

```text
Entrada: s = "010010"
Saída: ["0.10.0.10","0.100.1.0"]
```

**Exemplo 5:**

```text
Entrada: s = "101023"
Saída: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

### Restrições

- `0 <= s.length`
- `s consiste de um string com somente dígitos.`
- `utilizar somente o formato Ipv4.`

---

### Notas

- `Todos os dígitos na string s PRECISAM ser usados para obter cada IP válido`