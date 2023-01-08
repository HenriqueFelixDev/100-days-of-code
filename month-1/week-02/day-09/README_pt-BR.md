[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 09 - Capturando Água da Chuva

Dados `n` números inteiros não negativos representando um mapa de elevação, onde a largura de cada barra é `1`, calcule quanto de água ela pode capturar depois que chover.

### Exemplos

**Exemplo 1:**

<p align="left">
  <img src="assets/rainwatertrap.png" alt="Rain water trap">
</p>

```text
Entrada: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Saída: 6
Explicação: O mapa com a elevação acima (seção preta) é representada pelo array [0,1,0,2,1,0,1,3,2,1,2,1]. Nesse caso, 6 unidades de água de chuva (seção azul) estão sendo capturadas.
```

**Exemplo 2:**

```text
Entrada: height = [4,2,0,3,2,5]
Saída: 9
```

### Restrições

- `n == height.length`
- `0 <= n <= 3 * 104`
- `0 <= height[i] <= 105`

---

### Notas

- N/A